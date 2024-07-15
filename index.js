const express = require('express');
const app = express();
const port = 4000;

app.get((req, res) => {
    return res.send("App Running SuccessFull.....");
})


app.listen(port, () => {
    console.log(`Server Running On ${port}`)
})