const express = require('express');
const path = require('path');

const app = express();

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../index.html'));
});

const port = process.env.PORT || 4005;
//this will get the PORT variable from Heroku. However, if one isn't assigned (ex. when we are testing locally) it will ue port 4005.

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});