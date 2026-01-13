var express = require('express');
var path= require('path');
var app = express();

var credentials=[
    {id:1, username:"arnav", password:"arnav123"},
    {id:2, username:"chaitrali", password:"chaitrali123"},
    {id:3, username:"rahul", password:"rahul123"},
    {id:4, username:"priya", password:"priya123"},
    {id:5, username:"amit", password:"amit123"},
    {id:6, username:"sneha", password:"sneha123"}
   ];
   
var flowers=[
    {id: 1, name: "Rose", price: "5.99", quantity: 10},
    {id: 2, name: "Lily", price: "4.99", quantity: 15},
    {id: 3, name: "Tulip", price: "3.99", quantity: 20},
    {id: 4, name: "Daisy", price: "2.99", quantity: 25},
    {id: 5, name: "Sunflower", price: "6.99", quantity: 30},
    {id: 6, name: "Orchid", price: "7.99", quantity: 5}
   ];

var customers=[
    {id:1, firstname:"Arnav", lastname:"Tolahunase", email:"arnav.tolahunase@gmail.com", contact:"9545611780"},
    {id:2, firstname:"Chaitrali", lastname:"Patil", email:"chaitrali.patil@gmail.com", contact:"7030799646"},
    {id:3, firstname:"Rahul", lastname:"Sharma", email:"rahul.sharma@gmail.com", contact:"9876543210"},
    {id:4, firstname:"Priya", lastname:"Patel", email:"priya.patel@gmail.com", contact:"9123456789"},
    {id:5, firstname:"Amit", lastname:"Kumar", email:"amit.kumar@gmail.com", contact:"9876543210"},
    {id:6, firstname:"Sneha", lastname:"Singh", email:"sneha.singh@gmail.com", contact:"9123456789"}
    ];

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.get()


app.listen(9000);