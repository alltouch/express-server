
var lines = [];

module.exports = function (app) {

    app.get('/', function (req, res) {
        res.render('index.hbs', {
            title: 'Type your name man'
        });
    });

    app.post('/form-submit', function (req, res) {
        var name = req.body.name;
        lines.push(name);
        res.render('index.hbs', {
            title: 'thanks ' + name,
            lines: lines
        });
    });

};