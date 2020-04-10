const express = require('express');
const app = express();


app.use((req, res, next) => {
    console.log(req.url);
    next();
})
app.use('/t/:product/:style', express.static('./public'));

app.use('/exp', (req, res) => {
    res.end('Hello World');
})

app.listen(1000, (err) => {
    if (err) console.error(err);
    console.log('Port listening on port 1000');
})