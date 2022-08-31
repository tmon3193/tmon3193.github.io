
var amntPerTote = [30, 24, 12, 5];
var amntPerRack = [16, 12, 8, 6];
var partsInTote;
var spacesOnRack;
var flag;
var numTotes;

/*Calculate how many parts are in the totes as well as the parts on the rack*/

function flagNum() {

    let totalTotes = document.getElementById("numTotes").value;
    let firstRack = document.getElementById("rackStart").value;
    let partsInTote = amntPerTote[0];
    let spacesOnRack = amntPerRack[0];
    

    if (document.getElementById("T1XX").selected){
        let flag = Math.ceil(partsInTote * totalTotes / spacesOnRack) + 1 + parseInt(firstRack);
        if (flag > 72) flag = flag - 72;
        document.getElementById("flag").value = flag;
        
    } else if (document.getElementById("LA").selected){
        let flag = Math.ceil(partsInTote * totalTotes / spacesOnRack) + 1 + parseInt(firstRack);
        if (flag > 72) flag = flag - 72;
        document.getElementById("flag").value = flag;

    } else if (document.getElementById("C1YB").selected){
        let flag = Math.ceil(partsInTote * totalTotes / spacesOnRack) + 1 + parseInt(firstRack);
        if (flag > 72) flag = flag - 72;
        document.getElementById("flag").value = flag;
        
    } else if (document.getElementById("DT").selected){
        let partsInTote = amntPerTote[1];
        let flag = Math.ceil(partsInTote * totalTotes / spacesOnRack) + 1 + parseInt(firstRack);
        if (flag > 72) flag = flag - 72;
        document.getElementById("flag").value = flag;
        
    } else if (document.getElementById("WS/WL").selected){
        let partsInTote = amntPerTote[1];
        let flag = Math.ceil(partsInTote * totalTotes / spacesOnRack) + 1 + parseInt(firstRack);     
        if (flag > 72) flag = flag - 72;
        document.getElementById("flag").value = flag;
        
    } else if (document.getElementById("Toyota").selected){
        let partsInTote = amntPerTote[2];
        let spacesOnRack = amntPerRack[1];
        let flag = Math.ceil(partsInTote * totalTotes / spacesOnRack) + 1 + parseInt(firstRack); 
        if (flag > 72) flag = flag - 72;
        document.getElementById("flag").value = flag;
        
    } else if (document.getElementById("C1TL").selected){
        let partsInTote = amntPerTote[1];
        let spacesOnRack = amntPerRack[2];
        let flag = Math.ceil(partsInTote * totalTotes / spacesOnRack) + 1 + parseInt(firstRack);  
        if (flag > 72) flag = flag - 72;
        document.getElementById("flag").value = flag;
        
    } else if (document.getElementById("Mustang").selected){
        let spacesOnRack = amntPerRack[3];
        let flag = Math.ceil(partsInTote * totalTotes / spacesOnRack) + 1 + parseInt(firstRack);      
        if (flag > 72) flag = flag - 72;
        document.getElementById("flag").value = flag;
        
    } else if (document.getElementById("Rivian").selected){
        let spacesOnRack = amntPerRack[2];
        let partsInTote = amntPerTote[1];
        let flag = Math.ceil(partsInTote * totalTotes / spacesOnRack) + 1 + parseInt(firstRack);        
        if (flag > 72) flag = flag - 72;
        document.getElementById("flag").value = flag;
        
/*Service Builds*/

    } else if (document.getElementById("VN").selected){
        let partsInTote = amntPerTote[3];
        let spacesOnRack = amntPerRack[2];
        let flag = Math.ceil(partsInTote * totalTotes / spacesOnRack) + 1 + parseInt(firstRack);
        if (flag > 72) flag = flag - 72;
        document.getElementById("flag").value = flag;
    
    } else if (document.getElementById("U502").selected){
        let partsInTote = amntPerTote[1];
        let flag = Math.ceil(partsInTote * totalTotes / spacesOnRack) + 1 + parseInt(firstRack);
        if (flag > 72) flag = flag - 72;
        document.getElementById("flag").value = flag;
    
    }
    
}

