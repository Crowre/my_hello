const express = require('express')
const app = express();

//membuat json parser
app.use(express.json())

//menampung data ke dalam array
var data = [
    {
        Full_name: "Wildan Auliya Hafidz",
        User_name: "wildan",
        Address: "Tabing,Padang"
    },
    {
        Full_name: "Andrean Budi Kencana",
        User_name: "andre",
        Address: "Cilapak,Bandung"
    }
]
//mengambil data dari local lalu tampilkan ke web browser atau postman
app.get('/api/assignment23', (req, res) => {
    res.send(data)
})



//membuat data dari user lalu tampilkan di web browser 
app.post('/api/assignment23', (req, res) => {
    //testing post restapi
    console.log(req.body);
    // res.send(req.body)

    //membuat id 
    const id = Math.floor(Math.random() * 100)
    //check kondisi dari data yang akan dibuat
    if (Object.entries(req.body).length == 3
        && ("Full_name" in req.body)
        && ("User_name" in req.body)
        && ("Address" in req.body)
    ) {
        assignment23[id] = req.body
        res.send(assingment23)
    } else {
        res.status(400)
        res.send('invalid body')
    }
})

app.listen(3000, () => {
    console.log("server is running on port 3000");
})