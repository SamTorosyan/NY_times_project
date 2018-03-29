
    $(document).ready(function() {

$("#searchButton").on(click(function(search) {  //The search button is calling all of the functions below 

    search.preventDefault();

    var searchWords = $("#searchWords").val().trim();

    results = $("getRecords").val().trim();

    startYear = $("#startYear").val().trim();

    endYear = $("#endYear").val().trim();

    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api_key=518f358f95c54095a2e77ca785eca4c0";
        
   
    });
        
    $.ajax({
        type: 'GET',
        url: 'http://api.nytimes.com/svc/search/v2/articlesearch',
        dataType: 'JSONP',
        callback: '',
        data: {
            q: seaString,
            response-format: "jsonp",
            api-key: '518f358f95c54095a2e77ca785eca4c0',
            callback: 'svc_search_v2_articlesearch'
        },
        success: function(data, textStats, XMLHttpRequest) {
            // passed function object for data processing
            console.log(data);
        }
    });

})

