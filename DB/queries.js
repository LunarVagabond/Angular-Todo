const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Todos',
  password: 'Baec11072793.',
  port: 5432,
})

const getTodos = (request, response) => {
  pool.query('SELECT * FROM todo', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const addTodo = (req, res) => {
  const { title, description } = req.body;
  let sql = "";
  if (description == "" || description == null) {
    sql = `INSERT INTO todo (title) VALUES('${title}') RETURNING *`;
  }
  else {
    sql = `INSERT INTO todo (title, description) VALUES ('${title}', '${description}') RETURNING *`;
  }


  pool.query(sql, (error, result) => {
    if (error) {
      throw error
    }
    res.status(201).json(result.rows[0])
  })
}
const removeTodo = (req, res) => {
  const id = parseInt(req.params.id)

  pool.query(`DELETE FROM todo WHERE todo_id = ${id}`, (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json({status:"ok"})
  })

}

const updateStatus = (req, res) => {
  const id = parseInt(req.params.id)

  pool.query(`UPDATE todo SET completed = NOT completed WHERE todo_id = ${id}`, (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json({status:"ok"})
  }
  )
}


module.exports = {
  getTodos,
  addTodo,
  removeTodo,
  updateStatus
}