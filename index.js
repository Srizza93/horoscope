const express = require('express');
const app = express();
const port = 3000;

app.use(cors());

app.listen(process.env.PORT || port, () => {
  console.log(`Horoscope app listening on port ${port}`);
});
