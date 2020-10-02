const login = {
    pageWrap: function(holder) {
        return `
      <!DOCTYPE html>
      <html>
      <head>
      <link rel="stylesheet" href="itemList.css">
        <title>Store Inventory</title>
        </head>
         <body>
            ${holder}
        </body>
      </html>
    `;
    },
    loginPage: function() {
        return this.pageWrap(`
       <body>  
        <div class="login-form">
          <form action="/session" method="POST">
            <input class ="username" name="username" required pattern="[0-9a-zA-Z_.-]*" placeholder="Enter Username"/>
            <button type="submit" class="login-button">Login</button>
          </form>
        </div>
        </body>
      `);
    },
    inventoryPage: function(username) {
        return this.pageWrap(`
        ${this.logout(username)}
            <div class="main">
                <h1>STORE INVENTORY</h1>
                <div class="outgoing">
                    <form action="">
                        <input id="user-input" type="text" class="to-add" placeholder="Add New Items" />
                        <button id="add-button" type="submit">ADD</button>
                    </form>
                </div>
                <div id="inventory-list" class="inventory-list ">
                    <ul class="inventory">
                    </ul>
                </div>
            </div>
            <script src="inventoryLogic.js"></script>
      `);
    },
    logout: function() {
        return `
      <div class="logout">
        <form action="/logout" method="POST">
          <button class="logout" type="submit">Logout</button>
        </form>
      </div>
    `;
    }
};
module.exports = login;