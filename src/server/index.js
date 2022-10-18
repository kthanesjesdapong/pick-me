const express=require('express');
require('cross-fetch/polyfill');
const routeHandler=require('./api/route');
const path=require('path');
const cors=require('cors');

const app=express();

app.use(express.static(path.join(__dirname, '../..', 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'index.html'));
});

app.use(cors());
app.use('/graphql', routeHandler);

const PORT=process.env.PORT||8080;
app.listen(PORT, () => console.log(`listening on ${PORT}`));

module.exports=app;
