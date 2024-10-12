const express = require('express');
const app = express();
const port = 3000;
const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
};

const mysql = require('mysql');
const connection = mysql.createConnection(config)

const insertPerson = " insert into person(name) values ('Leonardo Vicente') ";
const selectPerson = " select * from person";
connection.query(insertPerson);

app.get('/', (req, res) => {
  connection.query(selectPerson, (err, people) => {
    if (err) {
      console.error('Erro ao executar query:', err);
      res.status(500).send('Erro no banco de dados');
      return;
    }
    let html = '<h1>Full Cycle Rocks!</h1>';
    html += 'Person list';

    people.forEach(person => {
      html += `<li>Name: ${person.name}</li>`;
    });
    res.send(html);
  });
});
app.listen(port, () => {
  console.log('Servidor rodando na porta 3000');
});