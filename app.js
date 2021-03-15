const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');


const PORT = process.env.PORT || 4001;
app.use(express.static('public'));
app.use(morgan("dev"))
app.use(bodyParser.json()) //required body


app.listen(PORT, () => {
    console.log(`Server is listining on port ${PORT}`)
})

module.exports = app