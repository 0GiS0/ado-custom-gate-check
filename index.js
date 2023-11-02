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

    let environment = req.body.environment;

    if (environment == "dev") {

        // Send Approval
        const approval = {
            "name": "TaskCompleted",
            "taskId": taskId,
            "jobId": jobId,
            "result": "succeeded"
        };
    }
    else if (environment == "prod") {
        // Send Rejection
    }

    res.status(200).send('OK');
});

app.listen(PORT, () => {
    console.log(`🚀 Server listening on port ${PORT}`);
});