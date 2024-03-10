document.getElementById("calculateBtn").addEventListener("click", calculate);

function calculate() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);

    let result = myFunction(num1, num2);
    document.getElementById("demo").innerHTML = "The result is: " + result;
}

function myFunction(p1, p2) {
    return p1 * p2;
}
