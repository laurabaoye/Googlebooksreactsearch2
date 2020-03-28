const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./public'))

app.use("/", require("./routes/apiroutes"))
app.use("/", require("./routes/clientsroutes"))

app.listen(PORT, () => {
    console.log(`listening at http://localhost:${PORT}`);
});