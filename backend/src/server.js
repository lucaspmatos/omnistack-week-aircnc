const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-kmptn.mongodb.net/week9?retryWrites=true&w=majority', {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})

// GET, POST, PUT, DELETE

// req.query = Acessar query parameters (para filtros)
// req.params = Acessar route parameters (para edição e exclusão)
// req.body = Acessar corpo da requisição (para criação e edição de registros)

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads',)));
app.use(routes);

app.listen(3333);