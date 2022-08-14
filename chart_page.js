function addToFunction(paramater) {
    let input = document.querySelector("#function input")

    console.log(input.value[input.selectionStart])
    input.value = input.value.slice(0, input.selectionStart) + paramater + input.value.slice(input.selectionStart);
    console.log(input.value.slice(0, input.selectionStart))
    console.log( input.value.slice(input.selectionStart))
    input.focus()
    
}

window.onload = e => {
    let info = document.querySelector("#info-popup")
    info.style.animationPlayState = "running"
}


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
    
        else {
            input.value = input.value.slice(0, i) + input.value.slice(i+1)
        }
        
    }
}

input.addEventListener("keyup", e=> {
    checkInput()
})

let range_start = document.querySelector("#end-range");
let range_end =  document.querySelector("#start-range");;
let inputs = document.querySelectorAll("input")
var btn =  document.querySelector("#show-btn");


// NO PASTE
inputs.forEach(e=>{
    e.addEventListener("keyup", e=> {
        if(input.value != "" && range_end.value != ""  && range_start.value != "") {
 
            btn.removeAttribute("disabled") 
        }
        else {
            btn.setAttribute("disabled", "");

        }
    })
    e.addEventListener("paste", ev=> {
        ev.preventDefault();
    
    })
})

function empty(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "" || str[i] == " ") {
            str = str.slice(0, i) + str.slice(i+1) 
        }
        
    }

    return str
}

function toFunction(statement, x) {
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

            if(statement[i] == ")" && statement[i] == "(") {
                statement = statement.slice(0, i) + " sqrt" + statement.slice(i+1) 
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
    return eval(statement)
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
    let start_range = document.querySelector("#start-range").value
    let end_range = document.querySelector("#end-range").value
    let start_number = Math.min(parseInt(end_range), parseInt(start_range))
    let end_number = Math.max(parseInt(end_range), parseInt(start_range))
    for (let i = start_number; i <= end_number; i++) {
        Xs.push(i)
    }
    return Xs
}

var counter = 0

function showFunction() {
    let XAxis = getXAxis()
    let YAxis = getYAxis()

    var data = {
    labels: XAxis,
    datasets: [{
        label: 'f(x)',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: YAxis,
    }]
    };

    var config = {
    type: 'line',
    data: data,
    options: {}
    };
    

    ctx = document.querySelector("canvas").getContext('2d')

    let chartStatus = Chart.getChart(ctx); // <canvas> id
    console.log(chartStatus)
    if (chartStatus != undefined) {
        chartStatus.destroy();
    }


    chartInstance = new Chart(ctx, config);
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

function e(x) {
    return Math.exp(x)

}