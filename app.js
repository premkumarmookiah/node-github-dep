const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const rootDir = require('./utils/path');
const firstAppRouter = require('./router/firstapp');
const app = express();

// Use body-parser with extended option
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/premkumar', firstAppRouter);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
});

// Add process event handlers for exit, SIGTERM, and SIGINT
process.on('exit', (code) => {
    console.log(`Process exiting with code ${code}`);
});

process.on('SIGTERM', () => {
    console.log('Received SIGTERM signal. Cleaning up...');
    // Perform cleanup operations before exiting
    process.exit(0);
});

process.on('SIGINT', () => {
    console.log('Received SIGINT signal. Cleaning up...');
    // Perform cleanup operations before exiting
    process.exit(0);
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
