const { Buffer } = require("node:buffer");
const { buffer } = require("node:stream/consumers");
const buf = Buffer.from("My Name is Aniket");
console.log(buf.toString());
// Alloc unsafe allocates data without clearing the garbage values from the memory adrress

/*
    const bufTwo = Buffer.allocUnsafe(110);
    console.log(bufTwo);
*/

const bufThree = Buffer.alloc(10);
bufThree.write("Hello");
console.log(bufThree.toString("utf8", 0, 4));

// Buffer Manipulation

const bufFour = Buffer.from("Aniket");
console.log(bufFour.toString());
console.log(bufFour[1]);
bufFour[1] = 0x4a;
console.log(bufFour[1]);
console.log(bufFour.toString());

// concat the Buffers

const bufFive = Buffer.from("Aniket ");
const bufSix = Buffer.from("Vyavahare");
const merged = Buffer.concat([bufFive, bufSix]);
console.log(merged.toString());
