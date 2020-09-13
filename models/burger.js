var orm = require("./config/orm.js");

// Console log all the party_name's.
orm.selectAll("party_name", "parties");


// Console log all the parties that have a party-type of grown-up.
orm.insertOne("parties", "party_type", "grown-up");

// Console log all the clients and their parties.
orm.updateOne(["client_name", "party_name"], "clients", "parties", "id", "client_id");