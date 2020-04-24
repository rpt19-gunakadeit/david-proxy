const express = require('express');
const app = express();
const cors = require('cors');

app.use('/t/:product/:style', express.static('./public'));

app.listen(1000, (err) => {
    if (err) console.error(err);
    console.log('Port listening on port 1000');
})