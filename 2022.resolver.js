const { input } = require("./2022.input.js");

const day1 = (input) => {
  const storing = input.split("\n")
  const res = [];
  let rank = 0;
  storing.forEach(element => {
    if (element !== "") {
      res[rank] ? res[rank] += parseInt(element) : res[rank] = parseInt(element)
    } else {
      rank += 1;
    }
  });
  res.sort().reverse();
  console.log("Jour 1 - Partie 1 : " + res[0]);
  console.log("Jour 1 - Partie 2 : " + (res[0] + res[1] + res[2]));
};

const day2 = (input) => {
  // A = pierre
  // B = feuille
  // C = ciseau

  // X = pierre => 1
  // Y = feuille => 2
  // Z = ciseau => 3

  // 0 défaite - 3 égalité - 6 victoire

  let pointPrimary = 0;

  const split = input.split("\n");

  split.forEach((element) => {
    switch (element) {
      case "A X": // Pierre - Pierre = égalité => 1 points pierre + 3 points égalité
        pointPrimary += 4;
        break;
      case "A Y": // Pierre - Feuille = victoire => 2 points feuille + 6 points victoire
        pointPrimary += 8;
        break;
      case "A Z": // Pierre - Ciseau = défaite => 3 points ciseau + 0 point de défaite
        pointPrimary += 3;
        break;
      case "B X": // Feuille - Pierre = défaite => 1 points pierre + 0 points défaite
        pointPrimary += 1;
        break;
      case "B Y": // Feuille - Feuille = égalité => 2 points feuille + 3 points égalité
        pointPrimary += 5;
        break;
      case "B Z": // Feuille - ciseau = victoire => 3 point ciseau + 6 point victoire
        pointPrimary += 9;
        break;
      case "C X": // Ciseau - Pierre = victoire => 1 point Pierre + 6 point victoire
        pointPrimary += 7;
        break;
      case "C Y": // Ciseau - Feuile = défaite => 2 point Feuile + 0 point défaite
        pointPrimary += 2;
        break;
      case "C Z": // Ciseau - Ciseau = égalité => 3 point Ciseau + 3 point égalité
        pointPrimary += 6;
        break;
    }
  });

  console.log("Jour 2 - Partie 1 : " + pointPrimary);

  let pointSecondary = 0;

  // A = pierre
  // B = feuille
  // C = ciseau

  // X = défaite => 0
  // Y = égalité => 3
  // Z = victoire => 6

  split.forEach((element) => {
    switch (element) {
      case "A X": // Défaite face à pierre donc ciseau => 0 + 3
        pointSecondary += 3;
        break;
      case "A Y": // Égalité face à pierre donc pierre => 3 + 1
        pointSecondary += 4;
        break;
      case "A Z": // Victoire face à pierre donc feuille => 6 + 2
        pointSecondary += 8;
        break;
      case "B X": // Défaite face à feuille donc pierre => 0 + 1
        pointSecondary += 1;
        break;
      case "B Y": // Égalité face à feuille donc feuille => 3 + 2
        pointSecondary += 5;
        break;
      case "B Z": // Victoire face à feuille donc ciseau => 6 + 3
        pointSecondary += 9;
        break;
      case "C X": // Défaite face à ciseau donc feuille => 0 + 2
        pointSecondary += 2;
        break;
      case "C Y": // Égalité face à ciseau donc ciseau => 3 + 3
        pointSecondary += 6;
        break;
      case "C Z": // Victoire face à ciseau donc pierre => 6 + 1
        pointSecondary += 7;
        break;
    }
  });

  console.log("Jour 2 - Partie 2 : " + pointSecondary);
};

const day3 = (input) => {
  const priorityTable = [
    "",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const split = input.split("\n");

  let priority = 0;

  split.forEach((element) => {
    const partOne = element.slice(0, element.length / 2);
    const partTwo = element.slice(element.length / 2, element.length);

    let breakPoint = false;

    partOne.split("").forEach((letter) => {
      if (breakPoint === false) {
        if (partTwo.includes(letter)) {
          priority += priorityTable.indexOf(letter);
          breakPoint = true;
        }
      }
    });
  });

  console.log("Jour 3 - Partie 1 : " + priority);

  let priorityGroup = 0;

  for (let i = 0; i < 100; i++) {
    const firstElf = split[i * 3].split("");
    const secondElf = split[i * 3 + 1].split("");
    const thirdElf = split[i * 3 + 2].split("");

    let breakPoint = false;

    firstElf.forEach((letter) => {
      if (breakPoint === false) {
        if (secondElf.includes(letter) && thirdElf.includes(letter)) {
          priorityGroup += priorityTable.indexOf(letter);
          breakPoint = true;
        }
      }
    });
  }

  console.log("Jour 3 - Partie 2 : " + priorityGroup);
};

const day4 = (input) => {
  let fullyContains = 0;
  let overlaps = 0;

  const split = input.split("\n")

  split.forEach((element) => {
    const firstNumber = parseInt(element.split(",")[0].split("-")[0]);
    const secondNumber = parseInt(element.split(",")[0].split("-")[1]);
    const thirdNumber = parseInt(element.split(",")[1].split("-")[0]);
    const fourthNumber = parseInt(element.split(",")[1].split("-")[1]);

    if ((firstNumber >= thirdNumber && secondNumber <= fourthNumber) || (thirdNumber >= firstNumber && fourthNumber <= secondNumber)) {
      fullyContains += 1;
    }

    if (Math.max(secondNumber, fourthNumber) - Math.min(firstNumber, thirdNumber) <= (secondNumber - firstNumber) + (fourthNumber - thirdNumber)) {
      overlaps += 1;
    }

  });

  console.log("Jour 4 - Partie 1 : " + fullyContains);
  console.log("Jour 4 - Partie 2 : " + overlaps);

};

const day5 = (input) => {
  const split = input.split("\n");

  const getStacksandInstructions = () => {
    formatedInput = {
      stacks: [[]],
      instructions: [],
    };
    for (let i = 1; i < 10; i++) {
      formatedInput.stacks[i] = [];
      split.slice(1, 9).forEach((element) => {
        if (element[i * 4 - 3] !== " ") {
          formatedInput.stacks[i].push(element[i * 4 - 3]);
        }
      });
    }
    split.slice(11).forEach((element) => {
      formatedInput.instructions.push(element.match(/[0-9]+/g));
    });

    return formatedInput;
  };

  const showAnswer = (stacksArray, part) => {
    const firstElement = [];
    stacksArray.forEach((element) => {
      firstElement.push(element[0]);
    });
    console.log("Jour 5 - Partie " + part + " : " + firstElement.join(""));
  };

  const firstSoluce = () => {
    const { stacks, instructions } = getStacksandInstructions();
    instructions.forEach((element) => {
      for (let i = 0; i < parseInt(element[0]); i++) {
        const movingEl = stacks[parseInt(element[1])].splice(0, 1)[0];
        stacks[parseInt(element[2])].unshift(movingEl);
      }
    });

    showAnswer(stacks, 1);
  };

  const secondSoluce = () => {
    const { stacks, instructions } = getStacksandInstructions();
    instructions.forEach((element) => {
      for (let i = parseInt(element[0]) - 1; i > -1; i--) {
        const movingEl = stacks[parseInt(element[1])].splice(i, 1)[0];
        stacks[parseInt(element[2])].unshift(movingEl);
      }
    });
    showAnswer(stacks, 2);
  };

  firstSoluce();
  secondSoluce();

};

const day6 = (input) => {
  const groupingTest = (size, part) => {
    [...input].some((element, index) => {
      const group = [];
      for (let i = 0; i < size; i++) {
        group.push(input[index + i])
      }
      if (new Set(group).size === group.length) {
        console.log(`Jour 6 - Partie ${part} : ${(index + size)}`);
        return true;
      }
    })
  }

  groupingTest(4, 1);
  groupingTest(14, 2);
};

const day7 = (input) => {
  const split = input.split("\n");

  const directoryName = [];

  split.forEach((element) => {
    if (element.slice(0,3) === "dir") {
      directoryName.push(element.slice(4))
    }
  })
  // console.log(directoryName);

  if (new Set(directoryName).size === directoryName.length) {
    console.log("is ok")
  }

  directoryName.forEach(element => {
    console.log(directoryName.filter(sub => sub === element))
  })

  console.log(new Set(directoryName).size)
  console.log(directoryName.length)
};

// day1(input.day1);
// day2(input.day2);
// day3(input.day3);
// day4(input.day4);
// day5(input.day5);
// day6(input.day6);
day7(input.day7);