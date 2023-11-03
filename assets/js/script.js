var breed = 'golden retriever';
function getBreed() {
    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/dogs?name=' + breed,
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
  document.getElementById("friendly").textContent += result[0].good_with_children;
  document.getElementById("barking").textContent += result[0].barking;
  document.getElementById("kids").textContent += result[0].good_with_children;
  document.getElementById("playful").textContent += result[0].playfulness;
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