const express = require('express');
// const database = require("./database.js");
const teeTimesRoutes = require('./routes/teetimes.js');
// const userRoutes = require("./routes/users.js");

const app = express();

app.use(express.static('../public'));
app.use(express.json());

app.use('/api/teetimes', teeTimesRoutes);
// app.use('/api/user', userRoutes);

app.listen(3001, () => {
  console.log(`Server listening on 3001`);
});
