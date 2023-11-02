require('dotenv').config();
const express = require('express');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.post('/hook', async (req, res) => {

    //Check headers
    console.log(req.headers);

    // Check body
    console.log(`Received: ${JSON.stringify(req.body)}`);

    let environment = req.body.environment;

    // Depends on the environment, you can allow or reject the deployment
    if (environment == "dev") {

        res.status(200).send({
            status: "approved",
        });

    }
    else if (environment == "prod") {

        // Probably you want to check some conditions before approve the deployment

        res.status(200).send({
            status: "rejected",
        });
    }

});

app.listen(PORT, () => {
    console.log(`🚀 Server listening on port ${PORT}`);
});