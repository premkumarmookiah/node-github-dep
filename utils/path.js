const path = require("path");

const rootDir = path.dirname(require.main.filename); //if we give the file name inside the path.dirname the path to that file will be assigned to rootDir variable here the app.js is the root and the name may change some times os we are using like this


module.exports = rootDir;