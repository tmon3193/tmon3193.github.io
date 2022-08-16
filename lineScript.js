
var amntPerTote = [30, 24, 14, 5];
var amntPerRack = [16, 12, 8];
var partsInTote;
var spacesOnRack;
var flag;
var numTotes;

function flagNum() {

    let totalTotes = document.getElementById("numTotes").value;
    let firstRack = document.getElementById("rackStart").value;
    let partsInTote = amntPerTote[0];
    let spacesOnRack = amntPerRack[0];
    
    /*Calculate how many parts are in the totes as well as the parts on the rack*/

    if (document.getElementById("T1XX").selected){
        let flag = Math.ceil(partsInTote * totalTotes / spacesOnRack) + 1 + parseInt(firstRack);
        document.getElementById("flag").innerHTML = flag;
        
    } else if (document.getElementById("LA").selected){
        let partsInTote = amntPerTote[1];
        let flag = Math.ceil(partsInTote * totalTotes / spacesOnRack) + 1 + parseInt(firstRack);
        document.getElementById("flag").innerHTML = flag;

    } else if (document.getElementById("DT").selected){
        let flag = Math.ceil(partsInTote * totalTotes / spacesOnRack) + 1 + parseInt(firstRack);
        document.getElementById("flag").innerHTML = flag;
        
    } else if (document.getElementById("WS/WL").selected){
        let flag = Math.ceil(partsInTote * totalTotes / spacesOnRack) + 1 + parseInt(firstRack);
        document.getElementById("flag").innerHTML = flag;
        
    } else if (document.getElementById("Toyota").selected){
        let partsInTote = amntPerTote[2];
        let spacesOnRack = amntPerRack[1];
        let flag = Math.ceil(partsInTote * totalTotes / spacesOnRack) + 1 + parseInt(firstRack);
        document.getElementById("flag").innerHTML = flag;
        
    } else if (document.getElementById("VN").selected){
        let partsInTote = amntPerTote[3];
        let spacesOnRack = amntPerRack[2];
        let flag = Math.ceil(partsInTote * totalTotes / spacesOnRack) + 1 + parseInt(firstRack);
        document.getElementById("flag").innerHTML = flag;
    }
    


}

