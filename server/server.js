const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./models/database');
const PORT = 8080;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../client`));
app.get('/', (req, res) => {
  res.sendFile(path.join(`${__dirname}/../client/index.html`));
});
const storiesRouter = express.Router();
app.use('/stories', storiesRouter);

storiesRouter.get('/', (req, res) => {
  db.query('Select * from stories', (err, result) => {
    if (err) res.status(418).json(err.stack);
    res.json(result.rows);
  });
});

storiesRouter.get('/:id', (req, res) => {
  const id = req.params.id;
  const text = `Select * from stories WHERE id=${id}`;
  db.query(text, (err, result) => {
    if (err) res.status(418).json(err.stack);
    if (result.rows.length < 1) res.json({ error: 'None Found' });
    res.json(result.rows[0]);
  });
});

storiesRouter.post('/', (req, res) => {
  const { title, seats, duration, complete, open, type, author } = req.body;
  const text = 'INSERT INTO stories(title, seats, duration, complete, open, type, author) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *';
  const values = [title, seats, duration, complete, open, type, author];
  db.query(text, values, (err, result) => {
    if (err) {
      res.status(418).json(err.stack);
    } else {
      res.json(result.rows[0]);
    }
  });
});

storiesRouter.patch('/:id', (req, res) => {
  const id = req.params.id;
  const { title, seats, duration, complete, open, type, author } = req.body;
  const text = 'UPDATE stories SET (title, seats, duration, complete, open, type, author) = ($1, $2, $3, $4, $5, $6, $7) WHERE id = $8 RETURNING *';
  const values = [title, seats, duration, complete, open, type, author, id];
  db.query(text, values, (err, result) => {
    if (err) {
      res.status(418).json(err.stack);
    } else {
      res.json(result.rows[0]);
    }
  });
});

storiesRouter.delete('/:id', (req, res) => {
  const id = req.params.id;
  const text = `DELETE FROM stories WHERE id=${id}`;
  db.query(text, (err, result) => {
    if (err) {
      res.status(418).json(err.stack);
    } else {
      res.json({ success: 'OK' });
    }
  });
});

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
