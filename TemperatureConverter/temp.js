let temp = 32;

document.getElementById("submitButton").onclick = function () {
    let temp;
    if (document.getElementById("cButton").checked) {
        temp = document.getElementById("textBox").value;
        temp = Number(temp);
        temp = toCelsius(temp);
        document.getElementById("tempLap").innerHTML = temp + ""  ;
    }
    else if (document.getElementById("fButton").checked) {
        temp = document.getElementById("textBox").value;
        temp = Number(temp);
        temp = toFahernheit(temp);
        document.getElementById("tempLap").innerHTML = temp + "F";
    }
    else {
        document.getElementById("tempLap").innerHTML = "Select a unit";
    }

}

temp = toCelsius(temp);
temp = toFahernheit(temp);
function toCelsius(temp) {
    return (temp - 32) * (5 / 9);
}
function toFahernheit(temp) {
    return temp * 9 / 5 + 32;
}