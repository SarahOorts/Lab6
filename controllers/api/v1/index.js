function updateStats(req, res) {
    // res.json({
    //     status: "succes",
    //     message:"hi",
    // });
    res.render("football/update");
}

function statistics(req,res) {
    // res.json({
    //     status: "succes",
    //     message:"hiya",
    // });
    res.render("football/dashboard");
}

module.exports.updateStats = updateStats;
module.exports.statistics = statistics;