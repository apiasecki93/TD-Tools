const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const ping = require('jjg-ping')

const PORT = process.env.PORT || 4001;
app.use(express.static('public'));
app.use(morgan("dev"))
app.use(bodyParser.json()) //required body

app.use('/favicon.ico', express.static('public/favicon.ico')); // działa

app.get('/ping',(req,res)=>
{
    const ip = req.headers.ip;
    console.log(ip)
    ping.system.ping(ip, function(latency, status){
        if (status) {
            let a = `Host with Ip: ${ip} is reachable (${latency} ms ping).`
            res.status(200).send({res: a})
            console.log(`${ip} + ${latency}`)
        } else {
            res.status(500)
        }
    })
   
})


app.listen(PORT, () => {
    console.log(`Server is listining on port ${PORT}`)
})


module.exports = app


