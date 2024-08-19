import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());

const api = "http://localhost:8000";

let angle = 0,
    battery = 100;

const checkToken = (token) => token === process.env.AUTH_DISK_TOKEN;

app.post('/api/send-battery', (req, res) => {
    // Put request to api/battery

});

app.post('/api/angle', (req, res) => {
    const { disk_token } = req.body;
    console.log(disk_token);

    if (!checkToken(disk_token)) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    res.json({ angle: angle });
});

app.post('/api/rotate', (req, res) => {
    const { disk_token, angle: newAngle } = req.body;

    if (!checkToken(disk_token)) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    angle = newAngle;
    res.json({ angle: angle });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});