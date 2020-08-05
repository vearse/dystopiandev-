const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

console.log(`Your port is ${process.env.PORT}`);
app.get('/:x/:y', (req, res) => {
    var numx = Number(req.params.x),
        numy = Number(req.params.y);
    var answer = numx + numy;
    var data = {answer: answer}
  res.json(data);
})

app.listen(process.env.PORT, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
})