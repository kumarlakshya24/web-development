"use strict";
(function IIFE() {
    const counter = () => {
        let count = 0;
        return () => {
            count += 1;
            return count;
        };
    };

    const addButton = document.querySelector('.outgoing button');
    const list = document.querySelector('.inventory');
    const button = document.querySelector('.inventory-list');
    const newTaskAdd = document.querySelector('.to-add');

    const inventoryInfo = {};

    const nextId = counter();

    function updateStatus(message) {
        list.innerText = message;
    }

    function errorResponse(response) {
        if (response.ok) {
            return response.json();
        }
        return response.json()
            .then(err => Promise.reject(err));
    }

    const renderList = (inventoryInfo) => {
        list.innerHTML = Object.keys(inventoryInfo).map(([key]) => {
            const inventoryItem = inventoryInfo[key];
            return `
        <li>
        <span
            data-id="${key}"
          class="delete">X</span>
          <span
            data-id="${key}"
            class="item-name">${inventoryItem.task}</span>   
            <input class="quantity" data-id="${key}" value="${inventoryItem.quantity}"></input>
            <button class="update" data-id="${key}">Update</button>
        </li>
      `;
        }).join('\n');
    };

    button.addEventListener('click', function(event) {
        const id = event.target.dataset.id;
        const ref = document.getElementById(id);
    });

    list.addEventListener('click', function(event) {
        if (event.target.classList.contains('delete')) {
            const itemId = event.target.dataset.id;
            fetch(`/items/${itemId}`, {
                    method: 'DELETE',
                })
                .then(errorResponse)
                .then(inventoryInfo => {
                    renderList(inventoryInfo);
                })
                .catch(err => {
                    updateStatus(err.error);
                });
        }

        fetch('/items/', {
                method: 'GET',
            })
            .then(errorResponse)
            .then(inventoryInfo => {
                renderList(inventoryInfo);
            })
            .catch(err => {
                updateStatus(err.error);
            });
    });

    addButton.addEventListener('click', () => {
        const name = newTaskAdd.value;
        const itemId = nextId();
        const quant = document.getElementsByClassName('.quantity').value;
        inventoryInfo[itemId] = { name: name, quantity: quant, itemId: itemId };
        if (name && quant && itemId) {
            fetch(`/items/`, {
                    method: 'POST',
                    headers: new Headers({
                        'content-type': 'application/json'
                    }),
                    body: JSON.stringify({ name, quant, itemId })
                })
                .then(errorResponse)
                .then(inventoryInfo => {
                    newTaskAdd.value = '';
                    quant.value = '';
                    renderList(inventoryInfo);
                    updateStatus('');
                })
                .catch(err => {
                    updateStatus(err.error);
                });
        }
    });

    // addButton.addEventListener('click', function(event) {
    //     const id = event.target.dataset.id;
    //     event.preventDefault();
    //     const text = newTaskAdd.value;
    //     const quan = 0;
    //     inventoryInfo[nextId()] = { task: text, quantity: quan };
    //     renderList(inventoryInfo);
    //     newTaskAdd.value = '';
    //     addButton.disabled = true;
    // });

    // button.addEventListener('click', function(event) {
    //     const id = event.target.dataset.id;
    //     event.preventDefault();
    //     if (event.target.classList.contains('update') && inventoryInfo[id]) {
    //         const quan = document.querySelectorAll('.quantity')[id - 1].value;
    //         inventoryInfo[id].quantity = quan;
    //         renderList(inventoryInfo);
    //         addButton.disabled = true;
    //     }
    // });

    button.addEventListener('click', function(event) {
        event.preventDefault();
        if (event.target.classList.contains('update')) {
            const itemID = event.target.dataset.id;
            const quantity = document.querySelector('.quantity').value;
            fetch(`/items/${itemID}`, {
                    headers: ({
                        'content-type': 'application/json'
                    }),
                    method: "PATCH",
                    body: JSON.stringify({
                        quantity: quantity
                    })
                })
                .then(errorResponse)
                .then(inventoryInfo => {
                    renderList(inventoryInfo);
                    updateStatus('');
                })
                .catch(err => {
                    updateStatus(err.error);
                });
        }
    });

    newTaskAdd.addEventListener('keyup', function(event) {
        const text = event.target.value;
        addButton.disabled = !text;
    });

    addButton.disabled = true;
    renderList(inventoryInfo);
})();