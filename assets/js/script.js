var breed = 'golden retriever';
function getBreed() {
    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/dogs?name=' + breed,
        headers: { 'X-Api-Key': 'iqP+bCQF+F1cPnw9y5EfDQ==Xfnu1gSs4QvrJu79'},
        contentType: 'application/json',
        success: function(result) {
            console.log(result);
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
  });
}
getfunfact();