const output = document.getElementById("obox")
const cont = document.getElementById("container");

const num0 = document.getElementById("num0");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");
const num4 = document.getElementById("num4");
const num5 = document.getElementById("num5");
const num6 = document.getElementById("num6");
const num7 = document.getElementById("num7");
const num8 = document.getElementById("num8");
const num9 = document.getElementById("num9");
const num00 = document.getElementById("num00");

const clear = document.getElementById("Clear");
const divide = document.getElementById("Divi");
const multiply = document.getElementById("Multi");
const subtract = document.getElementById("Subtract");
const addition = document.getElementById("Addition");
const equal = document.getElementById("Equal");
const back = document.getElementById("Back");
const deci = document.getElementById("decimal");
const percent = document.getElementById("percent");

var result = 0;
var isPressed = false;
var numArr = [num0, num1, num2, num3, num4, num5, num6, num7, num8, num9, num00];
var decCount = 0;


num0.onclick = function () {
    console.log(this.innerHTML);
    if (isPressed === true) {
        output.innerHTML = "" + num0.innerHTML;
        isPressed = false;
    } else {
        output.innerHTML = output.innerHTML + num0.innerHTML;
    }
}

num1.onclick = function () {
    if (isPressed === true) {
        output.innerHTML = "" + num1.innerHTML;
        isPressed = false;
    } else {
        output.innerHTML = output.innerHTML + num1.innerHTML;
    }
}

num2.onclick = function () {
    if (isPressed === true) {
        output.innerHTML = "" + this.innerHTML;
        isPressed = false;
    } else {
        output.innerHTML = output.innerHTML + num2.innerHTML;
    }
}

num3.onclick = function () {
    if (isPressed === true) {
        output.innerHTML = "" + this.innerHTML;
        isPressed = false;
    } else {
        output.innerHTML = output.innerHTML + num3.innerHTML;
    }
}

num4.onclick = function () {
    if (isPressed === true) {
        output.innerHTML = "" + this.innerHTML;
        isPressed = false;
    } else {
        output.innerHTML = output.innerHTML + num4.innerHTML;
    }
}

num5.onclick = function () {
    if (isPressed === true) {
        output.innerHTML = "" + this.innerHTML;
        isPressed = false;
    } else {
        output.innerHTML = output.innerHTML + num5.innerHTML;
    }
}

num6.onclick = function () {
    if (isPressed === true) {
        output.innerHTML = "" + this.innerHTML;
        isPressed = false;
    } else {
        output.innerHTML = output.innerHTML + num6.innerHTML;
    }
}

num7.onclick = function () {
    if (isPressed === true) {
        output.innerHTML = "" + this.innerHTML;
        isPressed = false;
    } else {
        output.innerHTML = output.innerHTML + num7.innerHTML;
    }
}

num8.onclick = function () {
    if (isPressed === true) {
        output.innerHTML = "" + this.innerHTML;
        isPressed = false;
    } else {
        output.innerHTML = output.innerHTML + num8.innerHTML;
    }
}

num9.onclick = function () {
    if (isPressed === true) {
        output.innerHTML = "" + this.innerHTML;
        isPressed = false;
    } else {
        output.innerHTML = output.innerHTML + num9.innerHTML;
    }
}

num00.onclick = function () {
    if (isPressed === true) {
        output.innerHTML = "" + this.innerHTML;
        isPressed = false;
    } else {
        output.innerHTML = output.innerHTML + num00.innerHTML;
    }
}


/* -------------------------- Operators -------------------------- */
divide.onclick = function () {
    if (isPressed === true) {
        isPressed = false;
    }
    if (output.innerHTML !== "") {
        str = output.innerHTML.substr(-1);
        if (str == "*" || str == "+" || str == "-") {
            output.innerHTML = output.innerHTML.substr(0, output.innerHTML.length - 1) + "/"
        } else {
            output.innerHTML = output.innerHTML + "/";
        }
    } else {}
}
multiply.onclick = function () {
    if (isPressed === true) {
        isPressed = false;
    }
    if (output.innerHTML !== "") {
        str = output.innerHTML.substr(-1);
        if (str == "/" || str == "+" || str == "-") {
            output.innerHTML = output.innerHTML.substr(0, output.innerHTML.length - 1) + "*"
        } else {
            output.innerHTML = output.innerHTML + "*";
        }
    } else {}
}

addition.onclick = function () {
    if (isPressed === true) {
        isPressed = false;
    }
    if (output.innerHTML !== "") {
        str = output.innerHTML.substr(-1);
        if (str == "*" || str == "/" || str == "-") {
            output.innerHTML = output.innerHTML.substr(0, output.innerHTML.length - 1) + "+"
        } else {
            output.innerHTML = output.innerHTML + "+";
        }

    } else {}
}

subtract.onclick = function () {
    if (isPressed === true) {
        isPressed = false;
    }
    if (output.innerHTML !== "") {
        str = output.innerHTML.substr(-1);
        if (str == "*" || str == "+" || str == "/") {
            output.innerHTML = output.innerHTML.substr(0, output.innerHTML.length - 1) + "-"
        } else {
            output.innerHTML = output.innerHTML + "-";
        }
    } else {}
}

percent.onclick = function () {
    if (output.innerHTML !== "") {
        output.innerHTML = output.innerHTML + "/100";
    }
}

back.onclick = function () {
    if (isPressed === true) {
        output.innerHTML = "";
        isPressed = false;
    } else {
        if (output.innerHTML.substr(-1) === ".") {
            decCount = 0;
        }
        output.innerHTML = output.innerHTML.substr(0, output.innerHTML.length - 1);
    }
}


clear.onclick = function () {
    output.innerHTML = "";
    result = 0;
}
equal.onclick = function () {
    if (output.innerHTML !== "") {
        result = eval(output.innerHTML);
        output.innerHTML = result;
        isPressed = true;
    }
}

deci.onclick = function () {
    if (decCount === 0) {
        output.innerHTML = output.innerHTML + ".";
        decCount = 1;
    }
}