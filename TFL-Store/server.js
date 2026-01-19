var express = require('express');
var path= require('path');
var credentials=require('./data/credentials.json');
var flowers=require('./data/flowers.json');
var customers=require('./data/customers.json');

var app = express();


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/", (request, response) => {

    response.sendFile("index.html")
})

app.get("/api/flowers", (request, response) =>{
    console.log("Flowers API called");
    response.send(flowers);
});

app.get("/api/flowers/:id", (request, response) => {
    console.log("Flower details API called");
    var flowerId=request.params.id;
    var thatFlower=flowers.find(f => f.id === flowerId);
    if(thatFlower){
        response.send(thatFlower);
    } else {
        response.status(404).send({message: "Flower not found"});
    }
});

app.get("/api/customers/:id", (request,response) => {
    console.log("Customer details API called");
    var customerId=request.params.id;
    var thatCustomer=customers.find(c => c.id === customerId);
    if(thatCustomer){
        response.send(thatCustomer);
    } else {
        response.status(404).send({message: "Customer not found"});
    }
});

app.get("/api/customers", (request, response) => {
    console.log("Customers API called");
    response.send(customers);
});


app.post("/api/login", (request, response) => {
    console.log("Login API called");
    var user=request.body;
    // if(user.username=="arnav" && user.password=="arnav123"){
    //     response.send({message: "Login successful"});
    // } else {
    //     response.status(401).send({message: "Invalid credentials"});
    // }
    var validUser=credentials.find(u => u.username == user.username && u.password == user.password);
    let message="Invalid Credentials";
    if(validUser){
        message="Login Successful";
        response.send({message: message});
    } else {
        
    }
});

app.post("/api/register", (request, response) => {
    console.log("Register API called");
    var newUser=request.body;
    credentials.push(newUser);
    response.send({message: "Registration successful"});
});

app.delete("/api/flowers/:id", (request, response) => {
    console.log("Delete flower called");
    let id=request.params.id;
    let remainingFlowers=flowers.filter(f => f.id !== id);
    flowers=remainingFlowers;
    response.send({message: "Flower deleted successfully"});
});


app.listen(9000);
console.log("Server listening on port 9000");
