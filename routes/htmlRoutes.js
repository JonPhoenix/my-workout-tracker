const path = require('path');

module.exports = (app) => {
    // Setting up the html routes
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'))
    });

    app.get('/exercise', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/exercise.html'));
    });

    app.get('/stats', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/stats.html'));
    });
};
