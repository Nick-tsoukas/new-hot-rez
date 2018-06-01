var tableData = require('../data/table-data.js');
var waitingListData = require('../data/waitinglist-data.js');
var path = require('path');

module.exports = function (app) {

    // display table data in json format
    app.get('/api/tables', function (req, res) {
        res.json(tableData);
    });

    app.get('/api/waitlist', function (req, res) {
        res.json(waitingListData);

    });

    app.post('/api/tables', function (req, res) {
        if (tableData.length < 5) {
            tableData.push(req.body);
            res.json(true); // KEY LINE
        }

        // Or false if they don't have a table
        else {
            waitListData.push(req.body);
            res.json(false); // KEY LINE
        }
    });

}