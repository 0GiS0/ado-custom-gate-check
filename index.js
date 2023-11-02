require('dotenv').config();
const express = require('express');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.post('/hook', async (req, res) => {

    //Check headers
    console.log(req.headers);

    let jobId = req.headers['jobid'],
        taskId = req.headers['taskinstanceid'];

    console.log(`Received webhook: ${JSON.stringify(req.body)}`);

    let organization = req.headers['planurl'],
        scopeIdentifier = req.headers['projectid'],
        hubName = req.headers['hubname'],
        planId = req.headers['planid'],
        authtoken = req.headers['authtoken'];

    let environment = req.body.environment;

    if (environment == "dev") {

        let approval = {
            status: "approved",
        }
        res.status(200).send(approval);

    }
    else if (environment == "prod") {
        // Send Rejection
        let approval = {
            status: "rejected",
        }

        res.status(200).send(approval);
    }    

});

app.listen(PORT, () => {
    console.log(`🚀 Server listening on port ${PORT}`);
});