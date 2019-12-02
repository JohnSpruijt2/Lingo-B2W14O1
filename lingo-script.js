function br() {
    var x = document.createElement("a")
        x.innerHTML = "<br>"
        page.appendChild(x)
}

var mainDiv = document.createElement("div")
    document.body.appendChild(mainDiv)
    mainDiv.setAttribute('id',"page")
    var page = document.getElementById('page')

var check = document.createElement("a")
page.appendChild(check)

var checkInput = document.createElement("input")
    page.appendChild(checkInput)
    checkInput.setAttribute('id',"checkInput")
    checkInput.style.marginTop = "50px"
    checkInput.setAttribute('maxlength',"5")
    checkInput.setAttribute('onkeydown',"return alphaOnly(event)")
br()
var submit = document.createElement("button")
    page.appendChild(submit)
    submit.innerHTML = "Submit"
    submit.setAttribute('id',"submit")
    submit.setAttribute('onclick',"checkletters()")
br()
var submit = document.createElement("button")
    page.appendChild(submit)
    submit.innerHTML = "Start new Game"
    submit.setAttribute('id',"newGame")
    submit.setAttribute('onclick',"location.reload()")
br()

var word = words[Math.floor((Math.random() * 478) + 1)]

var boxDiv = document.createElement("div")
    page.appendChild(boxDiv)
    boxDiv.setAttribute('id',"boxDiv")
    br()

for (i=0; i<5; i++) {
    var box = document.createElement("div")
        boxDiv.appendChild(box)
        box.innerHTML = "?"
        box.setAttribute('class',"box")
        box.setAttribute('id',"box"+i)
}
for (i=0; i<5; i++) {
    var box = document.createElement("div")
        page.appendChild(box)
        box.innerHTML = "?"
        box.setAttribute('class',"awnserBox")
        box.setAttribute('id',"awnserBox"+i)
}
var splitWord = word.split('')
document.getElementById('box0').innerHTML = splitWord[0]
var winCheck = [false,false,false,false,false]
var thisHasBeenDone = [false,false,false,false,false]

function checkletters() {
    var splitCheck = (document.querySelector('input[id="checkInput"]').value).split('')
    for (i=0; i<5; i++) {
        if (splitCheck != undefined) {
            if (splitWord[i] == splitCheck[i]) {
                document.getElementById("box"+i).innerHTML = splitCheck[i]
                document.getElementById("box"+i).style.backgroundColor = "green"
                winCheck[i] = true
                thisHasBeenDone[i] = true
            }
            
                
            }   
        }


for (i=0; i<5; i++) {
    if (splitWord[i] != splitCheck[i]) {
        if (splitCheck[i] == undefined) {
            document.getElementById("box"+i).innerHTML = "?"
            document.getElementById("box"+i).style.backgroundColor = "white"
        }
    }
}

for (i=0; i<5; i++) {
    if (splitCheck[i] == splitCheck[i+1] || splitCheck[i] == splitCheck[i+2] || splitCheck[i] == splitCheck[i+3] || splitCheck[i] == splitCheck[i+4] || splitCheck[i] == splitCheck[i-1] || splitCheck[i] == splitCheck[i-2]  || splitCheck[i] == splitCheck[i-3] || splitCheck[i] == splitCheck[i-4] ) {

        if (splitCheck[i] == splitWord[i+1] || splitCheck[i] == splitWord[i+2] || splitCheck[i] == splitWord[i+3] || splitCheck[i] == splitWord[i+4] || splitCheck[i] == splitWord[i-1] || splitCheck[i] == splitWord[i-2]  || splitCheck[i] == splitWord[i-3] || splitCheck[i] == splitWord[i-4] ) {
            if (thisHasBeenDone[i] != true) {
            if (splitCheck[i] != undefined) {
                for (x=0; x<5; x++) {
                    if ( splitCheck[i] == splitWord[x]) {
                        document.getElementById("box"+i).innerHTML = splitCheck[i]
                        document.getElementById("box"+i).style.backgroundColor = "yellow"
                        document.getElementById('box'+i).style.borderRadius = "90px"
                    }
                    else {
                        document.getElementById("box"+i).innerHTML = splitCheck[i]
                    }
                }
            }
        }
        }

        document.getElementById("box"+i).innerHTML = splitCheck[i]
    }
    else {
        if (thisHasBeenDone[i] != true) {
            if (splitCheck[i] != undefined) {
                for (x=0; x<5; x++) {
                    if ( splitCheck[i] == splitWord[x]) {
                        document.getElementById("box"+i).innerHTML = splitCheck[i]
                        document.getElementById("box"+i).style.backgroundColor = "yellow"
                        document.getElementById('box'+i).style.borderRadius = "90px"
                    }
                    else {
                        document.getElementById("box"+i).innerHTML = splitCheck[i]
                    }
                }
            }
        }
    }
}
    
    if (winCheck[0] && winCheck[1] && winCheck[2] && winCheck[3] && winCheck[4] == true) {
        document.getElementById("checkInput").disabled = true
        won = true
        for (i=0; i<5; i++) {
            document.getElementById("awnserBox"+i).innerHTML = splitWord[i]
        }
        document.getElementById("submit").disabled = true;
        alert('you geussed correctly!')
    }
    for (i=0; i<5; i++) {
        thisHasBeenDone[i] = false
    }
    renew()
}

var tries = 1
var won = false
function renew() {
    if (won == false) {
        if (tries <5) {
            for (i=0; i<5; i++) {
                document.getElementById("box"+i).setAttribute('id',"no")
            }
            for (i=0; i<5; i++) {
                var box = document.createElement("div")
                    boxDiv.appendChild(box)
                    box.innerHTML = "?"
                    box.setAttribute('class',"box")
                    box.setAttribute('id',"box"+i)
                if (winCheck[i] == true) {
                    document.getElementById('box'+i).innerHTML = splitWord[i]
                }
            }
            document.getElementById('box0').innerHTML = splitWord[0]
            tries++
        }
        else {
            for (i=0; i<5; i++) {
                document.getElementById("box"+i).setAttribute('id',"no")
            }
            for (i=0; i<5; i++) {
                document.getElementById("awnserBox"+i).innerHTML = splitWord[i]
            }
            document.getElementById("submit").disabled = true;
            document.getElementById("checkInput").disabled = true
            alert("you lost!")
        }   
    }
}


function alphaOnly(event) {
    var key = event.keyCode;
    return ((key >= 65 && key <= 90) || key == 8);
}