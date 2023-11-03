
var breed = 'golden retriever';
function getBreed() {
    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/dogs?name=' + breed,
        headers: { 'X-Api-Key': 'iqP+bCQF+F1cPnw9y5EfDQ==Xfnu1gSs4QvrJu79'},
        contentType: 'application/json',
        success: function(result) {
            console.log(result);
            handlestats(result);
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });
}

getBreed();

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

function handlestats(result) {
  console.log(result);
  var imgbox = $("#dogImageBox");
  var imgel =$("<img>");
  var dogimg = result[0].image_link;

  imgel.attr("src", dogimg);

  imgbox.append(imgel);
}