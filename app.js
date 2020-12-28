const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const college = require('./routes/college');
const student = require('./routes/student');
const PORT = 3000;

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/college', college);
app.use('/student', student);

app.listen(PORT, () => {
    console.log(`app is running on PORT:${PORT}`)
});