/* 1.) Grab the input value */

document.querySelector(".js-go").addEventListener("click", function () {
    //alert("testing!!"); by pressing Go! button

    //console.log(e); checking e function on mouse click
    var inputValue = document.querySelector(".js-userinput").value;
    var userInput = getUserInput();
    //console.log(input);
    //pushToDOM(input);
    searchGiphy(userInput);
});

document.querySelector(".js-userinput").addEventListener("keyup", function (e) {
    //alert("testing keyup function!!"); by pressing any key 
    //var input = document.querySelector("input").value;
    //console.log(input);

    if (e.which === 13) { //'e' is an invisible object or  it is an event listner or a pointer event checker.
        //pushToDOM(input);
        var userInput = getUserInput();
        searchGiphy(userInput);
    }

});

function getUserInput() {
    var inputValue = document.querySelector('.js-userinput').value;

    return inputValue;
}

/* 2.) Do the data stuff with the API */
function searchGiphy(searchQuery) {
    var url = 'https://api.giphy.com/v1/gifs/search?q=' + searchQuery + '&api_key=4a80JZkB1g5E4N1OkwhqhvUFsY27XcLJ';

    // AJAX Request
    var GiphyAJAXCall = new XMLHttpRequest();
    GiphyAJAXCall.open('GET', url);
    GiphyAJAXCall.send();


    GiphyAJAXCall.addEventListener('load', function (data) {

        // your callback events go here 
        var actualData = data.target.response;
        //console.log(data);
        pushToDOM(actualData);
        console.log(actualData);
    });

}

/* 3.) Show the GIF's */
function pushToDOM(response) {
    // alert("Checking pushToDOM");
    // turn response into real javascript object
    var response = JSON.parse(response);
    // console.log(response);

    // 1st way :- // var imageUrl = response.data[0].images.fixed_height.url;
    // console.log(imageUrl);

    var images = response.data;
    var container = document.querySelector(".js-container");
    container.innerHTML = "";

    images.forEach(function (image) {
        var src = image.images.fixed_height.url;
        // console.log(src);

        container.innerHTML = container.innerHTML + "<div class=\"masonry-item\"><img src = \" " + src + " \"  class = \"container-image\"></div>";
    });

    // var container =document.querySelector(".js-container");
    // container.innerHTML = input;  Gives error due to input is a local variable. 
    // container.innerHTML = input;
    // container.innerHTML =   "<img src = \" "+ imageUrl +" \">";

}