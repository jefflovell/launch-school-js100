/*
Write code that checks whether the string byteSequence contains the character x.

Copy Code
let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';
*/

let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';
/x/.test(byteSequence);

/*
Solution
Copy Code
byteSequence.includes('x'); // true
Further exploration
It's a great exercise to try to implement the functionality of String.prototype.includes() yourself.
*/