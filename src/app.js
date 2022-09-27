const express = require('express');
const error = require('./middlewares/error');
const tokenValidation = require('./middlewares/tokenValidation');
const loginRouters = require('./routes/loginRoutes');
const userRouters = require('./routes/userRoutes');
const categoriesRouters = require('./routes/categoriesRoutes');
const postRouters = require('./routes/postRoutes');

// ...

const app = express();

app.use(express.json());

// ...
app.use('/login', loginRouters);
app.use('/user', userRouters);
app.use('/categories', categoriesRouters);
app.use('/post', tokenValidation, postRouters);
app.use(error);
// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
