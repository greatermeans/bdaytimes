function findTitles(event,birthday) {
	event.preventDefault()
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
        'api-key': "eebe610850914b5ab4d083370d48a2ee",
        'begin_date': birthday.split('-').join(''),
        'end_date': birthday.split('-').join('')
    });

	$.ajax({
        url: url,
        method: 'GET',
    }).done(function(result) {
        var articles = result.response.docs
        		var news_articles = articles.filter((article) => article.type_of_material === "News")
				var i = 0
				var length = news_articles.length										// closures are very cool
				var array = [...Array(length).keys()]
				function myLoop () {
				   setTimeout(function () {
				      displayOnDiv(news_articles, array)
				      i++; if (i < length) { myLoop() }
				   }, ((1000/i)) + 100) 			// this is awesome
				}
				myLoop()
    }).fail(function(err) {
        throw err;
    });
}

// function displayHeadlines(articles) {
// 	const headlineList = `<ul>${articles.map(art => '<li>' +
//     `<a href="${art.web_url}" target="_blank"
//     > ${art.headline.main}</a>` + '</li>').join('')}</ul>`
// 	$('#headlines')[0].innerHTML = headlineList
// }

function displayOnDiv(articles, array) {
	var arrayIndex = parseInt(array.length*Math.random())
	var tag = array.splice(arrayIndex, 1)[0]
	$(`#${tag}`).append(`${articles.splice(0,1)[0].headline.main}`)
}

// take out repeats
// can we dynamically generate divs based on number of articles?
