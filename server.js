const express = require('express');
const Port = 5000;
const app = express();
const cors= require('cors');
app.use(cors());
app.get('/weather', (req,res) => {
    res.json({
        temperature : 37,
        condition : "Cloudy"
    });
});

app.listen(Port, ()=>{
    console.log(`Server Running on ${Port}`);
});