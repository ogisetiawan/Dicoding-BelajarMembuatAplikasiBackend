const fs = require('fs'); //? init mod filesystem

//? synchronous
const data = fs.readFileSync('./filesystems/test.txt', 'UTF-8');
console.log(data);

//? asynchronous 
const fileReadCallback = (error, data) => {
    if(error) {
        console.log('Gagal membaca berkas');
        return;
    }
    console.log(data);
};
 
fs.readFile('./filesystems/test.txt', 'UTF-8', fileReadCallback);