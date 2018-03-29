
    $(document).ready(function() {

$("#searchButton").on(click(function(search) {  //The search button is calling all of the functions below 

    search.preventDefault();

    var searchWords = $("#searchWords").val().trim();

    results = $("getRecords").val().trim();

    startYear = $("#startYear").val().trim();

    endYear = $("#endYear").val().trim();

    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        
    url += '?' + $.param({
            'api-key': "c0d2bf9ca99e4c96a41735e8889e1e88"
      
    });
        
    $.ajax({
        url: url,
        method: 'GET',
        })
        .then(function(response) {
        console.log(response);
        })
        .fail(function(err) {
        throw err;
        });


    })

 

})

})

