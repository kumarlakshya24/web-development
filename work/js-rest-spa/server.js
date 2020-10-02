"use strict";
const express = require('express');
const app = express();
const PORT = 3000;
const cookieParser = require('cookie-parser');
const store = require('./store');
const login = require('./loginPage');
const inventoryInfo = { name: "dummy", quantity: 0, itemId: 1 };

app.use(cookieParser());

app.get('/', (req, res) => {
    const { username } = req.query;
    if (username && store.store[username]) {
        res.send(login.inventoryPage(username));
    } else {
        res.redirect('/login');
    }
});

app.use(express.static('./public'));

app.get('/login/', express.json(), (req, res) => {
    res.send(login.loginPage());
});

app.get('/session', express.json(), (req, res) => {
    const { username } = req.body;
    res.cookie('saved', `${ username }`);
    res.send(login.inventoryPage());
});

app.post('/session', express.urlencoded({ extended: false }), (req, res) => {
    const { username } = req.body;
    if (!username.includes("dog")) {
        store.addUser({ username });
        res.redirect('/session');
    } else {
        res.status(401).json({ error: 'Bad Login' });
    }
});

app.post('/logout', express.urlencoded({ extended: false }), (req, res) => {
    const username = req.body;
    res.clearCookie('saved');
    store.removeUser(username);
    res.redirect('/');
});

app.get('/items/:itemId', (req, res) => {
    const itemId = req.params.itemId;
    if (inventoryInfo[itemId]) {
        res.json(inventoryInfo[itemId]);
    } else {
        res.send(inventoryInfo);
    }
});

app.get('/items/', (req, res) => {
    res.json(inventoryInfo);
});

app.post('/items/', express.json(), (req, res) => {
    const { name, quantity, itemId } = req.body;
    for (let item in inventoryInfo) {
        if (item.name === name) {
            res.status(409).json({ error: 'duplicate item' });
            return;
        }
    }
    inventoryInfo[itemId] = req.body;
    res.json(inventoryInfo);
});

app.delete('/items/:itemId', express.json(), (req, res) => {
    const itemId = req.params.itemId;
    if (!itemId) {
        res.status(400).json({ error: 'Missing item' })
    }
    delete inventoryInfo[itemId];
    res.json(inventoryInfo);
});

app.patch('/items/:itemId', express.json(), (req, res) => {
    const itemId = req.params.itemId;
    if (!itemId) {
        res.status(400).json({ error: "Not a valid item id" })
    }
    const quantity = req.body.quantity;
    inventoryInfo[itemId].quantity = quantity;
    res.json(inventoryInfo)
});

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));