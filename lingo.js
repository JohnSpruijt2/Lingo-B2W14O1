var mainDiv = document.createElement("div")
    document.body.appendChild(mainDiv);
    mainDiv.setAttribute('id',"page")

var word = document.createElement("a")
word.innerHTML = "word "
document.getElementById('page').appendChild(word)

var wordInput = document.createElement("input")
    document.getElementById('page').appendChild(wordInput)
    wordInput.setAttribute('id',"wordInput")


var check = document.createElement("a")
check.innerHTML = "<br>check "
document.getElementById('page').appendChild(check)

var checkInput = document.createElement("input")
    document.getElementById('page').appendChild(checkInput)
    checkInput.setAttribute('id',"checkInput")
    checkInput.style.marginTop = "50px"
