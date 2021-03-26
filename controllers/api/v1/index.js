function updateStats(req, res) {
    res.json({
        status: "succes",
        message:"hi",
    });
}

function statistics(req,res) {
    res.json({
        status: "succes",
        message:"hiya",
    });
}

module.exports.updateStats = updateStats;
module.exports.statistics = statistics;