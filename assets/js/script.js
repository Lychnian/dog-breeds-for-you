var breed;
var searcherButton = document.getElementById("searchButton");
var original = $("#dogImageBox").html();
function getBreed(dogBreed) {
    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/dogs?namdoe=' + dogBreed,
        headers: { 'X-Api-Key': 'iqP+bCQF+F1cPnw9y5EfDQ==Xfnu1gSs4QvrJu79'},
        contentType: 'application/json',
        success: function(result) {
            console.log(result);
            handleStats(result);
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });
}
function handleStats(result) {
  
  document.getElementById("name").textContent = result[0].name;
  document.getElementById("friendly").textContent = "Friendliness: " + result[0].good_with_children;
  document.getElementById("barking").textContent = "Barking: " + result[0].barking;
  document.getElementById("kids").textContent = "Kid Friendly: " + result[0].good_with_children;
  document.getElementById("playful").textContent = "Playful: " + result[0].playfulness;
  
  var imgbox = $("#dogImageBox");
  var imgel =$("<img>");
  var dogimg = result[0].image_link;
  imgel.attr("src", dogimg);
  $('#dogImageBox').html(original);
  imgbox.append(imgel);
}


function getfunfact() {
    var url = "https://dogapi.dog/api/v2/facts?limit=1"
    fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    //create
    var funFact = document.querySelector('#randomDogFacts')
    var pel = document.createElement('p')
    var fact = data.data[0].attributes.body
    //text/attr
    pel.textContent = fact;
    //append
    funFact.appendChild(pel)
  });
}
getfunfact();
searcherButton.addEventListener("click", function() {
  breed = document.getElementById('breedInput').value;
  getBreed(breed)
})

