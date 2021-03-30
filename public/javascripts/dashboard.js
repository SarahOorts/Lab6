let primus = Primus.connect("/", {
    reconnect: {
        max: Infinity,
        min: 500,
        retries: 10
    }
});

primus.on("data", (data) => {
    console.log(data);
    let bpoints = data.bpoints;
    let fpoints = data.fpoints;
    let brpoints = data.brpoints;
    console.log(document.querySelector(".bP").innerHTML);

    if(bpoints == "" && fpoints == ""){
        document.querySelector(".brP").innerHTML = brpoints;
    }
    else if( bpoints == "" && brpoints == ""){
        document.querySelector(".fP").innerHTML = fpoints;
    }
    else if(fpoints == "" &&  brpoints == ""){
        document.querySelector(".bP").innerHTML = bpoints;
    }
    else if(bpoints == ""){
        document.querySelector(".fP").innerHTML = fpoints;
        document.querySelector(".brP").innerHTML = brpoints;
    }
    else if(fpoints == ""){
        document.querySelector(".bP").innerHTML = bpoints;
        document.querySelector(".brP").innerHTML = brpoints;
    }
    else if(brpoints == ""){
        document.querySelector(".bP").innerHTML = bpoints;
        document.querySelector(".fP").innerHTML = fpoints;
    }
    else{
        document.querySelector(".bP").innerHTML = bpoints;
        document.querySelector(".fP").innerHTML = fpoints;
        document.querySelector(".brP").innerHTML = brpoints;
    }

    console.log(document.querySelector(".bP").innerHTML + " update");
    console.log(document.querySelector(".fP").innerHTML + " update");
    console.log(document.querySelector(".brP").innerHTML + " update");
});