function addToFunction(paramater) {
    let input = document.querySelector("#function input")

    console.log(input.value[input.selectionStart])
    input.value = input.value.slice(0, input.selectionStart) + paramater + input.value.slice(input.selectionStart);
    console.log(input.value.slice(0, input.selectionStart))
    console.log( input.value.slice(input.selectionStart))
    input.focus()
    
}
/*
window.onload = e => {
    let info = document.querySelector("#info-popup")
    info.style.animationPlayState = "running"
}

*/


function hidePop() {
    let info = document.querySelector("#info-popup")
    info.style.animation = "pop-up-hide 1.5s ease-in-out forwards"
}

function del() {
    let input = document.querySelector("#function input")
    input.value = input.value.slice(0, input.value.length -1)
}

function delAll() {
    input.value = ""
}

function nextWord() {
    let input = document.querySelector("#function input")
    let currentCaretPosition = input.selectionStart;

    // -1 Because Emacs goes to end of next word.
    let nextWordPosition = input.value.indexOf(' ', currentCaretPosition) + 1;
    if (nextWordPosition < 0) {
        //
    } else {
        input.setSelectionRange(nextWordPosition, nextWordPosition);
    }
}

function previousWord() {
    let input = document.querySelector("#function input")
    let currentCaretPosition = input.selectionStart;
    
    // +1 Because Emacs goes to start of previous word.
    let previousWordPosition = input.value.lastIndexOf('', currentCaretPosition) - 1;
    if (previousWordPosition < 0) {
        //
    } else {
        input.focus()
        input.setSelectionRange(previousWordPosition, previousWordPosition);
       
    }
}

let input = document.querySelector("#function input")

function checkInput() {
    for (let i = 0; i < input.value.length; i++) {

        if(input.value[i] == " ") {

        }
    
        else if(input.value[i] == "0") {
    
        }
    
        else if(input.value[i] == "1") {
    
        }
    
        else if(input.value[i] == "2") {
    
        }
    
        else if(input.value[i] == "3") {
    
        }
    
        else if(input.value[i] == "4") {
    
        }
    
    
        else if(input.value[i] == "5") {
    
        }
    
    
        else if(input.value[i] == "6") {
    
        }
    
    
        else if(input.value[i] == "7") {
    
        }
    
    
        else if(input.value[i] == "8") {
    
        }
    
    
        else if(input.value[i] == "9") {
    
        }
    
    
        else if(input.value[i] == "(") {
    
        }
    
        else if(input.value[i] == ")") {
    
        }
    
        else if(input.value[i] == "x") {
    
        }
    
        else if(input.value[i] == "*") {
    
        }

        else if(input.value[i] == "l") {
    
        }

        else if(input.value[i] == "n") {
    
        }

        else if(input.value[i] == "o") {
    
        }

        else if(input.value[i] == "g") {
    
        }

        else if(input.value[i] == "^") {
    
        }

        else if(input.value[i] == "√") {
    
        }

        else if(input.value[i] == "(") {
    
        }

        else if(input.value[i] == ")") {
    
        }

        else if(input.value[i] == "+") {
    
        }

        else if(input.value[i] == "-") {
    
        }

        else if(input.value[i] == "/") {
    
        }

        else if(input.value[i] == "e") {
    
        }

        else if(input.value[i] == "a") {
    
        }

        else if(input.value[i] == "b") {
    
        }

        else if(input.value[i] == "s") {
    
        }
    
        else {
            input.value = input.value.slice(0, i) + input.value.slice(i+1)
        }
        
    }
}

input.addEventListener("keyup", e=> {
    checkInput()
})

let range_start = document.querySelector("#end-range");
let range_end =  document.querySelector("#start-range");
let function_name = document.querySelector("#function-name")
let inputs = document.querySelectorAll("input")
var btn =  document.querySelector("#show-btn");
let deriv_btn = document.querySelector("#Deriv-btn");
let deriv_input = document.querySelector("#Deriv-point");
let lim_num = document.querySelector("#lim-num");
let lim_btn = document.querySelector("#lim-btn");

// NO PASTE
inputs.forEach(e=>{
    e.addEventListener("keyup", ev=> {
        if(input.value != "" && range_end.value != ""  && range_start.value != "" && function_name.value != "") {
 
            btn.removeAttribute("disabled") 
        }
        else {
            btn.setAttribute("disabled", "");

        }

        if(lim_num.value != "") {
 
            lim_btn.removeAttribute("disabled") 
        }

        if(deriv_input.value != "") {
 
            deriv_btn.removeAttribute("disabled") 
        }
        else {
            deriv_btn.setAttribute("disabled", "");

        }
    })
    e.addEventListener("paste", ev=> {
        ev.preventDefault();
    
    })
})

function empty(st) {
    st = st.replaceAll(" ", "")
    return st
}

function simplifyFun(statement) {
    statement = empty(statement)
    statement = statement.toLowerCase()
    console.log(statement)

    for (let i = 0; i < statement.length; i++) {
        if(statement[i] == "^") { statement = statement.slice(0, i) + " ** " + statement.slice(i+1) }
    }
    try {
        eval(statement)
    } catch (SyntaxError) {

        for (let i = 0; i < statement.length; i++) {
            
            if(statement[i] == "√") {
                statement = statement.slice(0, i) + " sqrt" + statement.slice(i+1) 
                console.log(statement)
            }

            if(statement[i] == "e"  && statement[i+1] == "(") {
                statement = statement.slice(0, i) + " exp" + statement.slice(i+1) 
                console.log(statement)
            }

            if(statement[i] == ")" && statement[i+1] == "(") {
                statement = statement.slice(0, i+1) + " * " + statement.slice(i+1) 
                console.log(statement)
            }

            if(statement[i] == "x"  && statement[i+1] == "e") {
                statement = statement.slice(0, i+1) + " * " + statement.slice(i+1) 
                console.log(statement)
            }
            
            

            try{
                eval(statement[i])

                if(typeof(eval(statement[i])) == 'number' && statement[i+1] == "x") {
                    statement = statement.slice(0, i+1) + " * " + statement.slice(i+1) 
                    console.log(statement)
                }

                if(typeof(eval(statement[i])) == 'number' && statement[i+1] == "√") {
                    statement = statement.slice(0, i+1) + " * " + statement.slice(i+1) 
                    console.log(statement)
                }

                if(typeof(eval(statement[i])) == 'number' && statement[i+1] == "l" && statement[i+2] == "o") {
                    statement = statement.slice(0, i+1) + " * " + statement.slice(i+1) 
                    console.log(statement)
                }

                if(typeof(eval(statement[i])) == 'number' && statement[i+1] == "l" && statement[i+2] == "n") {
                    statement = statement.slice(0, i+1) + " * " + statement.slice(i+1) 

                }

                if(typeof(eval(statement[i])) == 'number' && statement[i+1] == "a") {
                    statement = statement.slice(0, i+1) + " * " + statement.slice(i+1) 

                }

                if(typeof(eval(statement[i])) == 'number' && statement[i+1] == "e") {
                    statement = statement.slice(0, i+1) + " * " + statement.slice(i+1) 

                }
                
                if(typeof(eval(statement[i])) == 'number' && statement[i+1] == "(" ) {
                    statement = statement.slice(0, i+1) + " * " + statement.slice(i+1) 
                    console.log(statement)
                     }
                
                    }
            catch(e) {
                //
            }
          
        }
       
             
    }
    return statement
}

function toFunction(statement, x) {
    return eval(simplifyFun(statement, x))
}

function getFunctionColor() {
    let color = document.querySelector("#color")
    return color.value
}

function getFunctionName() {
    let function_name = document.querySelector("#function-name")
    return function_name.value
}


function getYAxis() {
    let ys = [];
    let start_range = document.querySelector("#start-range").value
    let end_range = document.querySelector("#end-range").value
    console.log(start_range)
    let start_number = Math.min(end_range, start_range)
    let end_number = Math.max(end_range, start_range)

    for (let x = start_number; x <= end_number; x++) {
        m = toFunction(input.value, x)
        if(m == Infinity) {
            ys.push(undefined)
        }

        if(m == -Infinity) {
            ys.push(undefined)
        }
        else {
            console.log(m)
            ys.push(m)
        }
        
    }
    return ys
}

function getXAxis() {
    let Xs = [];
    let start_range = parseInt(document.querySelector("#start-range").value)
    let end_range = parseInt(document.querySelector("#end-range").value)
    let start_number = Math.min(end_range, start_range)
    let end_number = Math.max(end_range, start_range)
    for (let i = start_number; i <= end_number; i++) {
        Xs.push(i)
    }
    return Xs
}

var counter = 0

function updateFunction() {
    let XAxis = getXAxis()
    let YAxis = getYAxis()
    let name = getFunctionName()
    let color = getFunctionColor()
    var trace = {
        type: 'scatter',
        mode: "lines",
        x: XAxis,
        y: YAxis,
        marker: {
            color: color,
            line: {
                width: 2.5
            }
        },
        name:name+ "(x)"
        
    };
    Plotly.addTraces(graphDiv, trace);

    
    
}

function showFunction() {
    
    fun = document.querySelector("#function-canvas")
    fun.style.display = "flex"
    let XAxis = getXAxis()
    let YAxis = getYAxis()
    let name = getFunctionName()
    let color = getFunctionColor()
    var trace1 = {
        type: 'scatter',
        mode: "lines",
        x: XAxis,
        y: YAxis,
        marker: {
            color: color,
            line: {
                width: 2.5
            }
        },
        name:name+ "(x)"
        
    };
    
    var data = [trace1];
    
    var layout = {
        title: 'Graph Title',
        showlegend: true
    };
    

    graphDiv = document.querySelector("#canvas")

    if (counter == 0) {
        Plotly.newPlot(graphDiv, data, layout, {scrollZoom: true,responsive: true});
    }
     else if(counter > 0) (
        updateFunction()
    ) 
    der_check = document.querySelector("#derivatives-check")
    der_check.style.display = "flex"
    Download = document.querySelector("#download")
    Download.style.display = "inline-block"

    counter++
    
}







function sqrt(x) {
    return Math.sqrt(x)
}


function ln(x) {
    return Math.log(x)
}


function log(x) {
    return Math.log10(x)
}

function exp(x) {
    return Math.exp(x);                                                                                                                                                                                                                                                                                                                                                                                                                                                sq(x)

}

function abs(x) {
    return Math.abs(x)
}

class Calc {

    limRightOf(x, func) {
        if (this.canPlugin(x, func)) {
            return func(x);
        }
        if (Math.abs(x) == Infinity) {
            return this.toInfinty(x, func);
        }
        var right1 = func(x + 0.0000000001);
        var right2 = func(x + 0.000000001);
        var right3 = func(x + 0.00000001);
        var rightDif1 = right2 - right1;
        var rightDif2 = right3 - right2;
        if (rightDif1 < rightDif2 && rightDif2 < 0) {
            return Infinity;
        }
        if (rightDif1 > rightDif2 && rightDif2 > 0) {
            return -1 * Infinity;
        }
        return this.round(right1);
    }

    limLeftOf(x, func) {
        if (this.canPlugin(x, func)) {
            console.log("1")
            return func(x);
        }
        if (Math.abs(x) == Infinity) {
            console.log("2")
            return this.toInfinty(x, func);
        }
        
        var left1 = func(x - 0.000000000000001);
        var left2 = func(x - 0.00000000000001);
        var left3 = func(x - 0.0000000000001);
        var leftDif1 = left2 - left3;
        var leftDif2 = left1 - left2;
        if (leftDif2 > leftDif1 && leftDif2 > 0) {
            console.log("3")
            return Infinity;
        }
        if (leftDif2 < leftDif1 && leftDif2 < 0) {
            console.log("4")
            return -1 * Infinity;
        }

        console.log("5")
        return this.round(left1);
    }

    isSpecial(x) {
        var v = simplifyFun(input.value)
        var simpli = math.simplify(v.replaceAll("x", x)).toString()
        if (simpli != 'Nan' && simpli != 'undefined') {
            return true
        }
        return false
    }

    Special(x) {
        var v = simplifyFun(input.value)
        var simpli = math.simplify(v.replaceAll("x", x)).toString()
        return eval(simpli)
    }

    limAt(x, func) {
        if (this.canPlugin(x, func)) {
            console.log("1")
            return func(x);
        }
        if (this.isSpecial(x)) {
            return this.Special(x)
        }
        if (Math.abs(x) == Infinity) {
            console.log("2")
            return this.toInfinty(x, func);
        }
        var left1 = func(x - 0.000000000000001);
        var right1 = func(x + 0.000000000000001);
        if (Math.abs(left1 - right1) < 0.00001) {
            console.log("3")
            return this.round((left1 + right1) / 2);
        }
        console.log("4")
        return NaN;
    }

    canPlugin(x, func) {
        var at = func(x);
        return at === at && Math.abs(at) == Infinity;
    }

    toInfinty(x, func) {
        if (x > 0) {
            var pos1 = Number.MAX_VALUE * 0.99999;
            var pos2 = Number.MAX_VALUE;
            var dif = func(pos2 - pos1);
            if (dif > 0) {
                return Infinity;
            } else {
                return -1 * Infinity;
            }
        } else {
            var pos1 = Number.MIN_VALUE;
            var pos2 = Number.MIN_VALUE * 0.99999;
            var dif = func(pos2 - pos1);
            if (dif < 0) {
                return Infinity;
            } else {
                return -1 * Infinity;
            }
        }
    }

    deriv(x1, func) {
        var at = func(x1);

        if (Math.abs(at) == Infinity || at !== at) {
            return NaN;
        }
        var y1 = func(x1);
        var x0 = x1 - 0.000000000001;
        var y0 = func(x0);
        var x2 = x1 + 0.000000000001;
        var y2 = func(x2);
        var slope1 = this.slope(x0, y0, x1, y1);
        var slope2 = this.slope(x1, y1, x2, y2);
        return (slope1 + slope2) / 2;
    }

    nthDeriv(n, x1, func) {
        var vals = [];
        var start = -1 * Math.round(n / 2);
        for (var i = start; i <= n + start + 1; i++) {
            var newX = x1 + i * 0.000000000000001;
            var newY = func(newX);
            vals.push(newY);
        }
        for (var i = 0; i < n; i++) {
            var diffs = [];
            for (var j = 1; j < vals.length; j++) {
                diffs.push(vals[j] - vals[j - 1]);
            }
            vals = diffs;
        }
        var out = (vals[0] + vals[1]) / 0.000000000000002;
        return out;
    }

    integral(min, max, func, num) {
        var sum = 0;
        var dx = (max - min) / num;
        var currentX = min + dx / 2;
        for (var i = 0; i < num; i++) {
            var currentY = func(currentX);

            sum += dx * currentY;
            currentX += dx;
        }
        return sum;
    }

    averageValue(min, max, func, num) {
        return this.integral(min, max, func, num) / (max - min);
    }

    distance(x1, y1, x2, y2) {
        return Math.sqrt((x1 - x2) * (x1 - x2) - (y1 - y2) * (y1 - y2));
    }

    slope(x1, y1, x2, y2) {
        return (y1 - y2) / (x1 - x2);
    }

    round(num) {
        var factor = 100000000000000;
        return Math.round(num * factor) / factor;
    }

}

Limits = document.querySelector("#limit")
Lims = document.querySelector("#lim")
Limits.onclick = function () {
    if (Limits.checked == true) {
        Lims.style.display = "flex"
    }
    else {
        Lims.style.display = "none"
    }
}

derivatives = document.querySelector("#derivatives")
der = document.querySelector("#Deriv")
derivatives.onclick = function () {
    if (derivatives.checked == true) {
        der.style.display = "flex"
    }
    else {
        der.style.display = "none"
    }
}

function getFunction(x) {
    return toFunction(input.value, x)
}

function getFunctionString(x) {
    return toFunction(input.value, x)
}

c = new Calc()
function getMmas(x0) {
    deriv = c.deriv(x0, getFunction)
    console.log(deriv)
    mm = `${getFunction(x0)} + ${deriv}(x - (${x0})) `
    return mm
}

function invertColor(hex) {
    if (hex.indexOf('#') === 0) {
        hex = hex.slice(1);
    }
    // convert 3-digit hex to 6-digits.
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    if (hex.length !== 6) {
        throw new Error('Invalid HEX color.');
    }
    // invert color components
    var r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
        g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
        b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
    // pad each with zeros and return
    return '#' + padZero(r) + padZero(g) + padZero(b);
}

function padZero(str, len) {
    len = len || 2;
    var zeros = new Array(len).join('0');
    return (zeros + str).slice(-len);
}

mmas_count = 0

function showMamas() {
    let x0 = parseInt(deriv_input.value)
    console.log(x0)
    let mmas = getMmas(x0)
    console.log(mmas)
    let ys = []

    let start_range = document.querySelector("#start-range").value
    let end_range = document.querySelector("#end-range").value
    let start_number = Math.min(end_range, start_range)
    let end_number = Math.max(end_range, start_range)
    for (let i = start_number; i <= end_number; i++) {
        f = toFunction(mmas, i)
        ys.push(f)
    }
    let YAxis = ys
    let name = `y${mmas_count}(x)`
    XAxis = getXAxis()
    mmas_count++
    let color = invertColor(getFunctionColor())

    var trace = {
        type: 'scatter',
        mode: "lines",
        x: XAxis,
        y: YAxis,
        marker: {
            color: color,
            line: {
                width: 2.5
            }
        },
        name:name
        
    };
    Plotly.addTraces(graphDiv, trace);


}

function changeStats() {
    e = document.querySelector("#x-stat")
    var value = e.options.selectedIndex;
    if (value == 1) {
        op1 = document.querySelectorAll(".op-1")
        op2 = document.querySelectorAll(".op-2")
        op1.forEach(ex=> ex.style.display = "block")
        op2.forEach(ex=> ex.style.display = "none")
    } else if(value == 2 || value == 3){
        op1 = document.querySelectorAll(".op-1")
        op2 = document.querySelectorAll(".op-2")
        op2.forEach(ex=> ex.style.display = "block")
        op1.forEach(ex=> ex.style.display = "none")
    }

}

function changeNum() {
    e = document.querySelector("#x-value")
    var value = e.options.selectedIndex;
    if (value == 3) {
        num = document.querySelector("#lim-num")
        num.style.display = "block"
    } else if (value == 1 || value == 2) {
        lim_btn.removeAttribute("disabled") 
    }
}

function getLim() {
    s1 = document.querySelector("#x-stat")
    var v1 = s1.options.selectedIndex;

    s2 = document.querySelector("#x-value")
    var v2 = s2.options.selectedIndex;
    
    i = document.querySelector("#lim-num")

    r = document.querySelector("#lim-res")

    if (v1 == 1 && v2 == 1) {
        lim = c.limAt(Infinity, getFunction)
    }

    else if (v1 == 1 && v2 == 2) {
        lim = c.limAt(-Infinity, getFunction)
    }

    else if (v1 == 2 && v2 == 3) {
        iv = parseInt(i.value)
        lim = c.limLeftOf(iv, getFunction)
    }

    else if (v1 == 3 && v2 == 3) {
        iv = parseInt(i.value)
        lim = c.limRightOf(iv, getFunction)
    }

    switch (lim) {
        case Infinity:
            r.value = "+∞"
            break;

        case -Infinity:
            r.value = "-∞"
            break;
        
        case NaN:
            r.value = "حالة عدم تعيين"
            break;
    
        default:
            r.value = lim
            break;
    }
    

}