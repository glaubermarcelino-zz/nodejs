const express = require('express');
const app = express();
const cors = require('cors');
const axios = require('axios');

app.use(cors());

app.get('/',async (req,res) =>
{
    try {
        //Desconstruindo o retorno extraindo o data direto do response do Axios
        const {data} = await axios('https://jsonplaceholder.typicode.com/users');
        return res.json(data)
        
    } catch (error) {
        console.error(error);
    }
})

app.listen('4567')
