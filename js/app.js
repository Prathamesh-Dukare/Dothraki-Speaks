var transButton = document.querySelector("#tButton");
var areaText = document.querySelector("#textarea");
var outputText = document.querySelector("#output");

var apiUrl = "https://api.funtranslations.com/translate/dothraki.json"

function getApiurl(input) {
    return apiUrl + '?' + "text=" + input
}
function errorHandler(error) {
    console.log("Error Is Occured! : " + error);
    alert("Something went wrong with the Server!\nTry Again Later");
}

transButton.addEventListener("click", function clickEventHandeler() {
    var inputText = areaText.value;
    // server fetching
    fetch(getApiurl(inputText))
    .then(Response=>Response.json())
    .then(json=>{
        var finalText=json.contents.translated;
        outputText.innerText=finalText;//output-final
    })
    .catch(errorHandler)
});

