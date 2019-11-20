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
    submit.setAttribute('onclick',"")
    br()
var word = words[Math.floor((Math.random() * 478) + 1)]
var boxDiv = document.createElement("div")
    page.appendChild(boxDiv)
    boxDiv.setAttribute('id',"boxDiv")
for (x=0; x<5; x++) {
    br()
    for (i=0; i<5; i++) {
        var box = document.createElement("div")
            boxDiv.appendChild(box)
            box.innerHTML = "?"
            box.setAttribute('class',"box")
            box.setAttribute('id',"box"+i)
    }
}