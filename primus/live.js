const Primus = require("primus");

function go(server){
    let primus = new Primus(server, {/* options */});
    //primus.save(__dirname +'/primus.js');

    primus.on("action", function (spark){
        console.log("we have an action");
        spark.on("data", (data) => {
            console.log(data);
            primus.write(data);
        });
    });
}

module.exports.go = go;