const express = require('express')
const app = express()
const port = 3000

app.set('view enginge', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

const functions = require('./functions.js');
const lcdDisplay = require('./lcd.js');

functions.ledExample();

//ROUTES------------------------------------------------------

app.get('/', (req, res) => {
    functions.ledFast();
    res.render('index.ejs')
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))