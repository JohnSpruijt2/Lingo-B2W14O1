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
    checkInput.setAttribute('maxlength',"1")
    checkInput.setAttribute('onkeydown',"return alphaOnly(event)")
br()
var submit = document.createElement("button")
    page.appendChild(submit)
    submit.innerHTML = "check"
    submit.setAttribute('id',"submit")
    submit.setAttribute('onclick',"checkLetter()")
br()
br()
for (i=0; i<4; i++) {
    var box = document.createElement("div")
        page.appendChild(box)
        box.innerHTML = "?"
        box.setAttribute('class',"box")
        box.setAttribute('id',"box"+i)
}
var box1 = document.createElement("div")
    page.appendChild(box1)
    box1.innerHTML = "?"
    box1.setAttribute('class',"box")



function checkLetter() {
    var wordString = document.querySelector('input[id="wordInput"]').value
    var checkString = document.querySelector('input[id="checkInput"]').value
    var splitWord = wordString.split('')
    for (i=0; i<5; i++) {
        if (splitWord[i] == checkString) {
            document.getElementById("box"+i).innerHTML = splitWord[i]
        }
    }

}
function alphaOnly(event) {
    var key = event.keyCode;
  return ((key >= 65 && key <= 90) || key == 8);
}