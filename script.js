var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=&api-key=xsAUUV7RbyPVX6CccnLc6g5xrce2ovfz"

$.ajax({

  url: queryURL,
  method: "GET"

}).then(function(response) {

    console.log(response);

})

$("#search").on("click", function(e){

    e.preventDefault();

    var newQuery = $("#searchBar").val();

    console.log(newQuery);

    

})

// $("#clear").on("click", function(){

// })