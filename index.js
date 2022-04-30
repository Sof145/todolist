const express = require('express');
const cors = require('cors');

require('dotenv').config();
require ('./databased');

const app = express();
const port = process.env.PORT || 4000

app.use(cors());
app.use(express.json());


app.listen(port, () => {
    console.log(`Server is runnig on port: ${port}`);
})