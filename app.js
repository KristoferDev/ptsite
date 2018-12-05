const express = require('express');

const app = express();

app.use((req, res, next) => {
   console.log("In the middleware");
   next();
});

app.use((req, res, next) => {
   console.log("after the middleware");
   res.send('<h1>Hello world!</h1>');
});

const server = http.createServer(app);

app.listen(3000);
