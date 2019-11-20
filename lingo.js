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

br()
var check = document.createElement("a")
check.innerHTML = "check "
page.appendChild(check)

var checkInput = document.createElement("input")
    page.appendChild(checkInput)
    checkInput.setAttribute('id',"checkInput")
    checkInput.style.marginTop = "50px"
br()
var submit = document.createElement("button")
    page.appendChild(submit)
    submit.innerHTML = "check"
    submit.setAttribute('id',"submit")
    submit.setAttribute('onclick',"checkLetter()")

function checkLetter() {
    alert('')
}