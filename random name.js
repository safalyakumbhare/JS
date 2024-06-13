function adjective(num1) {
  if (num1 < 0.1) {
    return "Crazy";
  } else if (num1 < 0.2) {
    return "Amazing";
  } else {
    return "Fire";
  }
}
function shop(num2) {
  if (num2 < 0.1) {
    return "Engine";
  } else if (num2 > 0.3) {
    return "Foods";
  } else {
    return "Garments";
  }
}
function word(num3) {
  if (num3 > 0.1) {
    return "Bros";
  } else if (num3 < 0.2) {
    return "Limited";
  } else {
    return "Hub";
  }
}

num1 = Math.random();
num2 = Math.random();
num3 = Math.random();
adj = adjective(num1);
shp = shop(num2);
wrd = word(num3);
console.log(`${adj} ${shp} ${wrd}`);
