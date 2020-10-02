"use strict";
(function IIFE() {
    const counter = () => {
        let count = 0;
        return () => {
            count += 1;
            return count;
        };
    };
    const nextId = counter();
    let quan = 0;
    const todos = {};
    const addButton = document.querySelector('.outgoing button');
    const list = document.querySelector('.todos');
    const button = document.querySelector('.inventory-list');
    const newTaskAdd = document.querySelector('.to-add');

    const renderList = (todos) => {
        list.innerHTML = Object.keys(todos).map((key) => {
            const todo = todos[key];
            return `
        <li>
        <span
            data-id="${key}"
          class="delete">X</span>
          <span
            data-id="${key}"
            class="todo ${todo.done ? 'complete' : ''}">${todo.task}</span>   
            <input type="button" disabled="" id="decrement" class="decrement" value="-">
            <span data-id="${key}" class="quantity">${quan}</span>
            <input type="button" id="increment" class="increment" value="+">
        </li>
      `;
        }).join('\n');
    };

    button.addEventListener('click', function(event) {
        if (event.target.classList.contains('decrement')) {
            const span = document.querySelector('.quantity');
            let value = span.innerText;
            value === isNaN(value) ? 0 : value;
            if (value <= 0) {
                disable('decrement');
            }
            if (value > 0) {
                value--;
                enable('decrement');
            }
            span.innerText = value;
        }
    });

    button.addEventListener('click', function(event) {
        if (event.target.classList.contains('increment')) {
            enable('decrement');
            const span = document.querySelector('.quantity');
            let value = span.innerText;
            value === isNaN(value) ? 0 : value;
            value++;
            span.innerText = value;
        }
    });

    list.addEventListener('click', function(event) {
        const id = event.target.dataset.id;
        if (event.target.classList.contains('todo') && todos[id]) {
            todos[id].done = !todos[id].done;
            renderList(todos);
        }

        if (event.target.classList.contains('delete')) {
            delete todos[id];
            renderList(todos);
        }
    });

    function getElement(elm) {
        return document.getElementById(elm);
    }

    function disable(elm) {
        return getElement(elm).setAttribute("disabled", true);
    }

    function enable(elm) {
        return getElement(elm).removeAttribute("disabled");
    }

    addButton.addEventListener('click', function(event) {
        event.preventDefault();
        const text = newTaskAdd.value;
        todos[nextId()] = { task: text };
        renderList(todos);
        newTaskAdd.value = '';
        addButton.disabled = true;
    });

    newTaskAdd.addEventListener('keyup', function(event) {
        const text = event.target.value;
        addButton.disabled = !text;
        button.disabled = !text;
    });

    addButton.disabled = true;
    renderList(todos);
})();