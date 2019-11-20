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

var word = words[Math.floor((Math.random() * 478) + 1)]
console.log(word)

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

function checkletters() {
    var splitWord = word.split('')
    var splitCheck = (document.querySelector('input[id="checkInput"]').value).split('')
    var winCheck = [false,false,false,false,false]
    for (i=0; i<5; i++) {
        if (splitCheck != undefined) {
            if (splitWord[i] == splitCheck[i]) {
                document.getElementById("box"+i).innerHTML = splitCheck[i]
                document.getElementById("box"+i).style.backgroundColor = "green"
                winCheck[i] = true
            }
            else if (splitWord[i] != splitCheck[i]) {
                if (splitCheck[i] == undefined) {
                    document.getElementById("box"+i).innerHTML = "?"
                    document.getElementById("box"+i).style.backgroundColor = "white"
                }
                else if (splitCheck[i] != undefined) {
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
        else {
            winCheck[i] = true
        }
    }
    if (winCheck[0] && winCheck[1] && winCheck[2] && winCheck[3] && winCheck[4] == true) {
        document.getElementById("checkInput").disabled = true
        won = true
        alert('you geussed correctly!')
    }
    renew()
}

var tries = 1
var won = false
function renew() {
    if (won == false) {
        if (tries <6) {
            for (i=0; i<5; i++) {
                document.getElementById("box"+i).setAttribute('id',"no")
            }
            for (i=0; i<5; i++) {
                var box = document.createElement("div")
                    boxDiv.appendChild(box)
                    box.innerHTML = "?"
                    box.setAttribute('class',"box")
                    box.setAttribute('id',"box"+i)
            }
        tries++
        }
        else {
            for (i=0; i<5; i++) {
                document.getElementById("box"+i).setAttribute('id',"no")
            }
            alert("you lost!")
            document.getElementById("checkInput").disabled = true
        }   
    }
}


function alphaOnly(event) {
    var key = event.keyCode;
    return ((key >= 65 && key <= 90) || key == 8);
}