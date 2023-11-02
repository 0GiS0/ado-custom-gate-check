require('dotenv').config();
const express = require('express');  

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.post('/hook', async (req, res) => {

    console.log(`Received webhook: ${JSON.stringify(req.body)}`);

    res.status(200).send('OK');
});

app.listen(PORT, () => {
    console.log(`🚀 Server listening on port ${PORT}`);
});