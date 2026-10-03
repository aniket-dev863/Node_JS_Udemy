import express from "express";
import db from "../db/index.js";
import { eq } from "drizzle-orm";
import { userSessions, usersTable } from "../db/schema.js";
import { randomBytes, createHmac } from "node:crypto";

const router = express.Router();
router.get("/"); // returns current logged in user
router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  const existingUser = await db
    .select({ email: usersTable.email })
    .from(usersTable)
    .where((table) => eq(table.email, email));

  if (existingUser.length > 0) {
    return res.status(400).json({
      message: `User with email :${email} already Exists `,
    });
  }
  const salt = randomBytes(256).toString("hex");
  const hashedPassword = createHmac("sha256", salt)
    .update(password)
    .digest("hex");
  const [user] = await db
    .insert(usersTable)
    .values({
      name,
      email,
      password: hashedPassword,
      salt,
    })
    .returning({ id: usersTable.id });
  return res.status(201).json({
    msg: `User created Successfull`,
    data: {
      id: user.id,
    },
  });
});
async function login(req, res) {
  const { email, password } = req.body;
  const [existingUser] = await db
    .select({
      id: usersTable.id,
      email: usersTable.email,
      salt: usersTable.salt,
      password: usersTable.password,
    })
    .from(usersTable)
    .where((table) => eq(table.email, email));

  if (!existingUser) {
    return res.status(404).json({
      msg: `Requested User Does not Exist`,
    });
  }
  // create a user session
  const existingSalt = existingUser.salt;
  const existingPassword = existingUser.password;
  const newHash = createHmac("sha256", existingSalt)
    .update(password)
    .digest("hex");
  if (newHash !== existingPassword) {
    return res.status(401).json({
      msg: `Requested User:${email} password does not match `,
    });
  }
  const [session] = await db
    .insert(userSessions)
    .values({
      user_id: existingUser.id,
    })
    .returning({
      id: userSessions.id,
    });

  // After every successful login we will provide the session if to the user .
  // on subsequent requests ahead the uers header will carry the session id .
  return res.json({
    msg: `Login Success `,
    sessionID: session.id,
  });
}
async function profile(req, res) {
  const sessionKey = req.header("sessionID");
  if (!sessionKey) {
    return res.status(401).json({
      msg: "You don't have access to view the page ",
    });
  }
  const [data] = await db
    .select({
      name: usersTable.name,
      email: usersTable.email,
      id: usersTable.id,
    })
    .from(userSessions)
    .innerJoin(usersTable, eq(usersTable.id, userSessions.user_id))
    .where(eq(userSessions.id, sessionKey));

  if (!data) {
    return res.status(404).json({
      msg: `You are not Authorized to view the page `,
    });
  }
  return res.status(201).json({
    id: data.id,
    name: data.name,
    email: data.email,
  });
}
router.post("/login", login);
router.post("/profile", profile);
export default router;
