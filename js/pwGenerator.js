var submitInput = document.querySelector("#submitButton").addEventListener("click", function() {
    event.preventDefault();
    genPW();
} , true)

var copy = document.querySelector("#jp2").addEventListener("click", function() {
    event.preventDefault();
    copyToClipboard();
} , true)

function changeHTML() {
    var jh1 = document.querySelector("#jh1");
    var jp1 = document.querySelector("#jp1");
    var jp2 = document.querySelector("#jp2");
    jp1.textContent = "Your Password has been generated below. You may click the password to copy to clipboard";
}

function genPW() {
    var lowercaseArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z' ];
    var numbersArray = [0,1,2,3,4,5,6,7,8,9];
    var specialCharArray = ['!','@','#','$','%','^','&','*','?','.'];
    var capitalArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    var combinedArray = [];
    var generatedPW = "";

    var lowercase = document.getElementById("lowercaseCheckbox");
    var capital = document.getElementById("capitalCheckbox");
    var numbers = document.getElementById("numberCheckbox");
    var specialChar = document.getElementById("specialCharacterCheckbox");
    var numberOfCharacters = document.getElementById("numOfChar").value;
    numberOfCharacters = parseInt(numberOfCharacters);

    if (lowercase.checked) {
        for (var i = 0; i < lowercaseArray.length; i++) {
            combinedArray += lowercaseArray[i];
        }
    }
    if (capital.checked) {
        for (var i = 0; i < capitalArray.length; i++) {
            combinedArray += capitalArray[i];
        }
    }
    if (numbers.checked) {
        for (var i = 0; i < numbersArray.length; i++) {
            combinedArray += numbersArray[i];
        }
    }
    if (specialChar.checked) {
        for (var i = 0; i < specialCharArray.length; i++) {
            combinedArray += specialCharArray[i];
        }
    }
    for (var i = 0; i < numberOfCharacters; i++) {
        generatedPW += (combinedArray[Math.floor(Math.random() * combinedArray.length)]);
    }
    var givePW = document.querySelector("#jp2");
    if (givePW) {
        givePW.textContent = generatedPW;
        $("#jp2").addClass("pw");
    }
    changeHTML();

}

function copyToClipboard() {
    var pw = $("#jp2");
    console.log(pw.text());
    if (pw.text()) {
        var $tmp = $("<input>");
        $("body").append($tmp);
        $tmp.val($(pw).text()).select();
        document.execCommand("copy");
        $tmp.remove();
    }
  }