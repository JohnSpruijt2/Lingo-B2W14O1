function br() {
    var x = document.createElement("a")
        x.innerHTML = "<br>"
        page.appendChild(x)
}

var mainDiv = document.createElement("div")
    document.body.appendChild(mainDiv)
    mainDiv.setAttribute('id',"page")
    var page = document.getElementById('page')

var word = document.createElement("a")
word.innerHTML = "word "
page.appendChild(word)

var wordInput = document.createElement("input")
    page.appendChild(wordInput)
    wordInput.setAttribute('id',"wordInput")
    wordInput.setAttribute('maxlength',"5")
    wordInput.setAttribute('onkeydown',"return alphaOnly(event)")

br()
var check = document.createElement("a")
check.innerHTML = "check "
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
    submit.setAttribute('onclick',"checkLetter()")
br()
br()
for (i=0; i<5; i++) {
    var box = document.createElement("div")
        page.appendChild(box)
        box.innerHTML = "?"
        box.setAttribute('class',"box")
        box.setAttribute('id',"box"+i)
}




function checkLetter() {
    document.getElementById("wordInput").disabled
    var wordString = document.querySelector('input[id="wordInput"]').value
    var checkString = document.querySelector('input[id="checkInput"]').value
    var splitWord = wordString.split('')
    var splitCheck = checkString.split('')
    document.getElementById("wordInput").disabled = true
    for (i=0; i<5; i++) {
        document.getElementById("box"+i).style.backgroundColor = "white"
        if (splitWord[i] != undefined) {
            if (splitWord[i] == splitCheck[i]) {
                document.getElementById("box"+i).innerHTML = splitCheck[i]
                document.getElementById("box"+i).style.backgroundColor = "green"
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
                        }
                        else {
                            document.getElementById("box"+i).innerHTML = splitCheck[i]
                        }
                    }
                }
            }
        }
    }
}
function alphaOnly(event) {
    var key = event.keyCode;
    return ((key >= 65 && key <= 90) || key == 8);
}