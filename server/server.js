//Require Express, body-parser, ps, 
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models/database');
const PORT = 8080;
let app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client'));

const storiesRouter = express.Router();
app.use('/stories', storiesRouter);

storiesRouter.get('/', (req, res) => {
  db.query('Select * from stories', (err, result) => {
    if(err) res.status(418).json(err.stack);
    res.json(result.rows);
  })
})

storiesRouter.get('/:id', (req, res) => {
  let id = req.params.id;
  const text = `Select * from stories WHERE id=${id}`;
  db.query(text, (err, result) => {
    if(err) res.status(418).json(err.stack);
    if(result.rows.length < 1) res.json({'error': "None Found"});
    res.json(result.rows[0]);
  })
})

storiesRouter.post('/', (req, res) => {
  const { title, seats, duration, complete, public, type, author, created_at } = req.body;
  const text = 'INSERT INTO stories(title, seats, duration, complete, public, type, author, created_at) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *';
  const values = [title, seats, duration, complete, public, type, author, created_at]
    db.query(text, values, (err, result) => {
      if (err) {
        res.status(418).json(err.stack);
      } else {
        res.json(result.rows[0]);
      }
    })
})

storiesRouter.patch('/:id', (req, res) => {
  let id = req.params.id;
  const { title, seats, duration, complete, public, type, author, created_at } = req.body;
  const text = 'UPDATE stories SET (title, seats, duration, complete, public, type, author, created_at) = ($1, $2, $3, $4, $5, $6, $7, $8) WHERE id = $9 RETURNING *';
  const values = [title, seats, duration, complete, public, type, author, created_at, id];
  db.query(text, values, (err, result) => {
    if(err){
      res.status(418).json(err.stack);
    } else {
      res.json(result.rows[0]);
    }
  })
})

storiesRouter.delete('/:id', (req, res) => {
  let id = req.params.id;
  const text = `DELETE FROM stories WHERE id=${id}`;
  db.query(text, (err, result) => {
    if (err) {
      res.status(418).json(err.stack);
    } else {
      res.json({"success": "OK"})
    }
  })
})

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));