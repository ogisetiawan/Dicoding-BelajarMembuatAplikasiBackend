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

