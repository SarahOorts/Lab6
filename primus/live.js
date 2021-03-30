const Primus = require("primus");

function go(server){
    let primus = new Primus(server, {/* options */});
    //primus.save(__dirname +'/primus.js');
    
}

module.exports.go = go;