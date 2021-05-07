const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');
const stripe = require("stripe")('sk_test_51IoOH4JEeP5IP8w8xM67KaMwawfAOgSJpiqmDNM8RjISbzJbNEPGk1j9zzDSCsJDnmEt474M0VpWTUXKLamqNZqi00GEhoPxF1')


//App config

const app = express();

//Middleware

app.use(cors({origin:true}))
app.use(express.json());

//API routes
app.get('/',(req,res)=> res.status(200).send('hello'))
app.post('/payments/create',async(req,res)=>{
    const total = Math.ceil(req.query.total);
    console.log('Payment Receive',total)
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    })

    res.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})

//Listen Command
exports.api = functions.https.onRequest(app)


//example end point
//http://localhost:5001/e-clone-14acd/us-central1/api

//http://localhost:5001/e-clone-14acd/us-central1/api