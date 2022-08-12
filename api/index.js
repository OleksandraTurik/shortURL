require('dotenv').config();
const express = require('express');
const connectDB = require('./db');

const app = express();
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', require('./url'));
app.use('/', require('./redirect'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running ${PORT}`);
});
