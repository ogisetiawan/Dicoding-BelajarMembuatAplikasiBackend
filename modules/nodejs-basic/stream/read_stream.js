const fs = require('fs'); //? init mod filesystem
 
const readableStream = fs.createReadStream('./stream/test.txt', {
    highWaterMark: 10  //? set 10byte ( default 16kb)
});
 
readableStream.on('readable', () => { //? set event name emiter
    try {
        process.stdout.write(`[${readableStream.read()}]`); 
    } catch(error) {
        // catch the error when the chunk cannot be read.
    }
});

readableStream.on('end', () => { //? set event name end 
    console.log('Done'); 
});