const amountsPerTote = [30, 24, 12, 5];
const amountsPerRack = [16, 12, 8, 6];

function calculateFlagNumber(totalTotes, firstRack, partsInTote, spacesOnRack) {
  return Math.ceil(partsInTote * totalTotes / spacesOnRack) + 1 + (firstRack);
}

function flagNum() {
  const totalTotes = parseInt(document.querySelector("#numTotes").value);
  const firstRack = parseInt(document.querySelector("#rackStart").value);
  let partsInTote = amountsPerTote[0];
  let spacesOnRack = amountsPerRack[0];

  switch (document.querySelector("#program").value) {
    case "T1XX":
    case "LA":
    case "C1YB":
      break;
    case "DT":
    case "WS/WL":
    case "C1TL":
      partsInTote = amountsPerTote[1];
      break;
    case "Toyota":
      partsInTote = amountsPerTote[2];
      spacesOnRack = amountsPerRack[1];
      break;
    case "Mustang":
      spacesOnRack = amountsPerRack[3];
      break;
    case "Rivian":
      partsInTote = amountsPerTote[1];
      spacesOnRack = amountsPerRack[2];
      break;
  }

  let flag = calculateFlagNumber(totalTotes, firstRack, partsInTote, spacesOnRack);
  if (flag > 72) flag = flag - 72;
  document.querySelector("#flag").value = flag;
}
