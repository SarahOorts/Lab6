console.log("hi");

document.querySelector(".teams").addEventListener("change", (e) =>{
    console.log(e);
        let belgianscore = document.querySelector(".Belgium input").value;
        console.log(belgianscore);
        let francescore = document.querySelector(".France input").value;
        console.log(francescore);
        let brazilscore = document.querySelector(".Brazil input").value;
        console.log(brazilscore);

        primus.write({
            bpoints : belgianscore,
            fpoints : francescore,
            brpoints : brazilscore
        });
        e.preventDefault();
});


let primus = Primus.connect("/", {
    reconnect: {
        max: Infinity,
        min: 500,
        retries: 10
    }
});