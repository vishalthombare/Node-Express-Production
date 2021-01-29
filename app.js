const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const port =3001

const app = express();

//use cors to allow cross origin resource sharing
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let brands = [];

app.post('/create',(req, res)=> {
  const newBook = {
    Brand: req.body.brand,
  };

  brands.push(newBook);
  console.log(brands);

});

app.get('/home', (req, res)=> {
  console.log('Inside Home Login');
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });
  console.log('Brands: ', JSON.stringify(brands));
  res.end(JSON.stringify(brands));
});


app.listen(port, () => {

  console.log(`Sever is Start... http://localhost:${port}`)
});
