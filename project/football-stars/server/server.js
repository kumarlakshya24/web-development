const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const app = express();
const PORT = 3001;

app.use(express.json());
app.use(bodyParser.json());
app.use(session({ secret: 'ssshhhhh', saveUninitialized: true, resave: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.use(express.static('./build'));

app.post('/login', (req, res) => {
    let sess = req.session;
    sess.username = req.body.username;
    if (sess.username === 'dog' || sess.username.split(' ').join('') === '') {
        res.status(403).json({ login: 'Invalid Username' });
    }
    const uid = uuidv4();
    res.cookie('uid', uid);
    res.json({ login: 'success' });
});

app.get('/session', (req, res) => {
    if (req.session.username) {
        return res.json({ set: 'active' });
    }
    res.json({ set: 'inactive' });
});

app.get('/logout', (req, res) => {
    res.json({ logout: 'success' });
    req.session.destroy(() => {

    });
});

app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));