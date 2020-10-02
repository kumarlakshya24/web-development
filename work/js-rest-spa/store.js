"use strict";

const users = {};

function addUser({ username }) {
    users[username] = username;
}

function removeUser({ username }) {
    delete users[username];
}

module.exports = {
    users,
    addUser,
    removeUser,
};