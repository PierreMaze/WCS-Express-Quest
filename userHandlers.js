const database = require('./database');

const getUsers = (req, res) => {
  const initialSql = "select * from users";
  const where = [];

  if(req.query.language != null){
    where.push({
        column: 'language',
        value: req.query.language,
        operator: '=',
      });
  }

  if(req.query.city != null){
    where.push({
      column: 'city',
      value: req.query.city,
      operator: '=',
    });  
  }

  database.query(
    where.reduce((sql, {column, operator}, index) => `${sql} ${index === 0 ? "where" : "and"} ${column} ${operator} ?`, initialSql),
    where.map(({value}) => value)
  )
  .then(([result]) => {
    res.json(result)
  })
  .catch((err) => {
    console.error(err);
    res.status(500).send("Error retrieving data from users");
  });
};

const getUsersById = (req, res) => {
  const id = parseInt(req.params.id);

  database
    .query("select * from users where id = ?", [id])
    .then(([users]) => {
      if (users[0] != null) {
        res.json(users[0]);
      } else {
        res.status(404).send("Not Found");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};


module.exports = {
  getUsers,
  getUsersById,
};