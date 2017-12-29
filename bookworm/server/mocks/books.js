/* eslint-env node */
'use strict';

const books = [{
  // "id": "978-0641723445",
  "id": "1",
  "title": "The Lightning Thief",
  "author": "Rick Riordan",
  "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus fuga, laudantium, odio dolor ut iusto pariatur neque similique quod ratione tempore velit iure sapiente beatae, id dolores sint quasi explicabo!",
}, {
  // "id": "978-1423103349",
  "id": "2",
  "title": "The Sea of Monsters",
  "author": "Rick Riordan",
  "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit molestiae distinctio quaerat explicabo laboriosam magni iure fuga unde qui beatae saepe, quam ipsum quos esse. Sed voluptates cumque possimus corrupti.",
}, {
  // "id": "978-1857995879",
  "id": "3",
  "title": "Sophie's World : The Greek Philosophers",
  "author": "Jostein Gaarder",
  "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, perferendis, vitae. Explicabo sit assumenda inventore, earum, alias dignissimos at, pariatur nesciunt animi veritatis molestias doloremque, aspernatur nihil cumque vero unde.",
}, {
  // "id": "978-1933988177",
  "id": "4",
  "title": "Lucene in Action, Second Edition",
  "author": "Michael McCandless",
  "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit earum ducimus aliquid laboriosam eius, rerum consequatur hic. Quae nam sint repellat, facere explicabo minima quod, aspernatur exercitationem quo iure in.",
}];

module.exports = function(app) {
  const express = require('express');
  let booksRouter = express.Router();

  booksRouter.get('/', function(req, res) {
    res.send({
      'books': books
    });
  });

  booksRouter.post('/', function(req, res) {
    let newBook = req.body.book;
    const newId = books.length + 1
    newBook.id = newId;
    books.push(newBook);
    res.send({ book: newBook });
  });

  booksRouter.get('/:id', function(req, res) {
    res.send({
      'books': {
        id: req.params.id
      }
    });
  });

  booksRouter.put('/:id', function(req, res) {
    res.send({
      'books': {
        id: req.params.id
      }
    });
  });

  booksRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/books', require('body-parser').json());
  app.use('/api/books', booksRouter);
};
