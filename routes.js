var articles = [
    {
        id: 'new1',
        title: 'This is first post'
    },
    {
        id: 'new2',
        title: 'This is second post'
    },
    {
        id: 'new3',
        title: 'This is third post'
    },
    {
        id: 'new4',
        title: 'This is fourth post'
    },
    {
        id: 'new5',
        title: 'This is fifth post'
    }
];

module.exports = function (app) {

    app.get('/', function (req, res) {
        res.render('index.hbs', {
            title: 'This is homepage',
            articles: articles
        });
    });

    app.get('/new:id', function (req, res) {
        var id = 'new' + req.params.id;
        var xxx = articles.filter(function (item) {
            return item.id === id;
        });
        if (!xxx.length) {
            return res.status(404).end('404 not found');
        }
        res.render('item.hbs', {
            date: new Date().toString(),
            title: xxx[0].title,
            body: 'This is big body'
        });
    });

    /*app.get('/new2', function (req, res) {
     res.render('item.hbs', {
     date: new Date().toString(),
     title: 'This is second post',
     body: 'lorem ipsum fjsdhgdsghsdjgdhgkjdsgksdhgdskjg'
     });
     });*/

    app.post('/form-submit', function (req, res) {
        var name = req.body.name;
        lines.push(name);
        res.render('index.hbs', {
            title: 'thanks ' + name,
            lines: lines
        });
    });

};