// const express = require('express');
// require('./config/config');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const { mongoose } = require('./db.js');
// var userController = require('./controller/userController.js');
// var periodController = require('./controller/periodController.js');

// var app = express();
// app.use(bodyParser.json());
// app.use(cors({ origin: 'http://localhost:4200' }));

// app.listen(process.env.PORT, () => console.log('Server started at port : 3000'));


// app.use('/user', userController);
// app.use('/period', periodController);


require('./config/config');
require('./db');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const rtsIndex = require('./router/index.router');

var app = express();

// middleware
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));
app.use('/api', rtsIndex);

// error handler
app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
});

// start server
app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}`));