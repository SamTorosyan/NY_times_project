
    $(document).ready(function() {

$("#searchButton").on(click(function(search) {  //The search button is calling all of the functions below 

    search.preventDefault();

    var searchWords = $("#searchWords").val().trim();

    results = $("getRecords").val().trim();

    startYear = $("#startYear").val().trim();

    endYear = $("#endYear").val().trim();

    var url = "http://developer.nytimes.com/article_search_v2.json";

        url += '?' + $.param({  
            'api-key': " ",
            'q': "searchWords"  ///telling it to get info from whatever keys are entered in Search Words
        
        


        });


    })

})




