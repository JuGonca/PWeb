// Importa as bibliotecas necessárias
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

// Cria o app Express
const app = express();
const port = 3000; // pode trocar se quiser

// Configura o Express pra entender dados de formulário
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configura a conexão com o MySQL (substitua pelos seus dados)
const db = mysql.createConnection({
  host: 'mysql-nutricode.alwaysdata.net',
  user: 'nutricode',
  password: 'Nutr1c@dE',
  database: 'nutricode_mysql'
});

// Tenta conectar
db.connect((err) => {
  if (err) {
    console.error('❌ Erro ao conectar ao banco:', err);
  } else {
    console.log('✅ Conectado ao MySQL com sucesso!');
  }
});

// Rota de teste
app.get('/', (req, res) => {
  res.send('Servidor e banco estão rodando!');
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});