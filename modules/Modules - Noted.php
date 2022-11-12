<?php
//@ Pengenalan Back-end
//? Web Service; Program yang dijalankan di web server agar kebutuhan bisnis terpenuhi.
//? Requst line; Methode GET,PUT,POST etc
//? Header; request data / raw data
//~ Request HTTP
//? cURL; Client URL
//? curl -X GET https://coffee-api.dicoding.dev/coffees -i ( bsa dijalankan CMD )
//? curl -X POST -H "Content-Type: application/json" -d "{\"name\": \"Kopi Luwak\"}" https://coffee-api.dicoding.dev/transactions -i (push data )
//~ REST Web Service
//? REST; arsitektur web service 
//? Arsitektur REST; memisahkan peran client dan server
//? Client-Server; Komunikasi client dan server dilakukan melalui protokol HTTP
//? Cacheable; permintaan dengan cepat, sehingga tdak selalu dari database server
//? Layered; arsitektur yang kompleks, client seharusnya tidak perlu tahu bagaimana server melayaninya.
//? Endpoint; method/path parameter dari API *getArticles, addArticles etc
//? Endpoint Hirarky/Relasi ; GET * /articles/:id/comments 

//@ Dasar Nodejs
//? REPL; Read-Eval-Print Loop, masukan perintah terminal dan jalan javascript code
//? Prosses Object; sebuah thread dari proccess komputer 
//? set env; SET NODE_ENV=production && node app.js
//~ NPM
//? pengelola package manager untuk javascript
//? GLOBAL (core modules) and LOKAL (local module) 
/** //?  menjalankan script di beberapa enviorenemt
 * "scripts": {
 * "start-dev": "NODE_ENV=development node app.js",
 *   "start": "NODE_ENV=production node app.js"
 * }
 * //? npm run [nama scripts]  
 * /
//~ Filesystem
//? sandboxing; melindungi kita dari program jahat serta tindakan pencurian yang dapat merampas privasi penggunanya
//~ Readable Stream
//? readfile bagian demi bagian
//~ Writable Stream
//? writefile bagian demi bagian

//@ Native Web Server nodejs
//~ Membuat HTTP Server
//? npm init --y ( y is default mode skip the asking node js)
//? Node.js menyediakan core modules http untuk membangun web server
//? server bisa melayani HTTP metode yg dikirim oleh client
//~ Method/verb HTTP
//? GET ; untuk mendapatkan data
//? POST ; mengirim data
//? PUT ; merubah data
//? DELETE ; menghapus data
//~ Body Request
//? biasanya untuk method POST/PUT/DELETE, data yang dikirim oleh client
//~ Response status
//? 100-199 : informational responses.
//? 200 - 299 : successful responses.
//? 300-399 : redirect.
//? 400-499 : client error.
//? 500-599 : server errors.
//~ Response Header
//? MIME types; tipe data yang diberikan oleh server untuk client json/gambar/xml dll
//~ Nodemon tool
//? tools yang dapat membantu agar tak perlu menjalankan ulang server ketika terjadi perubahan pada berkas JavaScript
//? npm install nodemon --save-dev
//~ Eslint
//? tools yang dapat membantu dalam penulisan javascript standart 
//~ Nanoid
//? tools yang dapat menangani unique ID
//~ Same-Origin policy
//? origin adalah server yang berbeda, seperti host port dan protokol
//~ CORS
//? Cross-origin resource sharing; teknik yang dapat bertukar data antar origin (client-server)

//@ Deploy web service
//? Amazon EC2 (Amazon Elastic Compute Cloud) layanan komputasi elastis di cloud
//? server EC2 ini bersifat elastis karena ia dapat menyesuaikan kapasitasnya berdasarkan permintaan dari client
//? Amazon EC2 server (instance) bersifat pay-as-you-go, artinya Anda hanya membayar sesuai dengan pemakaian

//@ Mengkonsumsi dan menguji RESTful API 
//? automated testing by postman and jest ( javascript testing )
