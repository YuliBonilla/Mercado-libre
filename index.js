const express = require('express')
const morgan = require('morgan')
const path = require('path');
const app = express();

app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set('json spaces', 2)

app.use("/api", require('./api/src/routes/index'));
app.use("/",  express.static(path.join(__dirname, './dist')));
app.get('/*', function (req, res) {
    res.sendFile('index.html', {root: path.join(__dirname, 'dist')});
});

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});