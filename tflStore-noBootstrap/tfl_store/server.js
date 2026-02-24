const express = require('express');
let path = require('path');
let app = express();

let credentials=require('./data/credentials.json');
// Serve static files from the 'public' directory
//product catalog
let flowers = require('./data/flowers.json');
//CRM data
let customers = require('./data/customers.json');
   

    //middleware

    app.use(express.static(path.join(__dirname, 'public')));
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    //node js application consists of 5 http modules
    //node js application consists of 4 Rset API HAndlers

    app.get("/", function(req, res) {
        res.sendFile("index.html");
    });


    // web query : http://localhost:3000/api/flowers
    // sql query: SELECT * FROM flowers;
    app.get("/api/flowers", (req, res) => {
        res.send(flowers);
    });
// web query : http://localhost:3000/api/flowers/3
// sql query: SELECT * FROM flowers WHERE id=3;
//web api handler mapped with web query
    app.get("/api/flowers/:id", (req, res) => {
        //scope variable
        //web query processing logic
        let id = req.params.id;
        let flower=flowers.find(product=>product.id==id); //where block:
        res.send(flower);
    });

    app.get("/api/customers/:id", (req, res) => {
        let customerId=req.params.id;
        let theCustomer=customers.find(cust=>cust.id==customerId);
        res.send(theCustomer);
    });
     app.get("/api/customers", (req, res) => {
        res.send(customers);
    });

    app.post("/api/login", (req, res) => {
        let user=req.body;
        // if (user.username=="admin" && user.password=="password123") {
        //     res.send("Valid User");
        // } else {
        //     res.send("Invalid User");
        // }

        let theUser=credentials.find(credential=>credential.username==user.username && credential.password==user.password);
        if (theUser) {
            res.send("Valid User");
        } else {
            res.send("Invalid User");
        }
    });

    app.post("/api/register", (req, res) => {
        let newCustomer=req.body;
        customers.push(newCustomer);
        res.send("Customer Registered Successfully");
    });

    app.post("/api/flowers", (req, res) => {
        let newFlower=req.body;
        flowers.push(newFlower);
        res.send("Flower Added Successfully");
    });       //insert new flower
 
   app.delete("/api/flowers/:id", (req, res) => {
    let id = req.params.id;
    let remainingFlowers = flowers.filter(flower => flower.id != id);
    flowers = remainingFlowers;
    res.send("Flower Deleted Successfully");
   });       //delete flower by id

    app.listen(9000);
    console.log("Server listening on port 9000");