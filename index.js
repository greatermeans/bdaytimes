const divIDs = []

    for (var i = 0; i <= 9; i++) {
        divIDs.push(i);
    }

function findTitles(event,birthday) {
	event.preventDefault()
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
        'api-key': "eebe610850914b5ab4d083370d48a2ee",
        'begin_date': birthday.split('-').join(''),
        'end_date': birthday.split('-').join('')
    });
    
	// document.getElementById('query').reset()
	$.ajax({
        url: url,
        method: 'GET',
    }).done(function(result) {
        displayHeadlines(result.response.docs)
    }).fail(function(err) {
        throw err;
    });
}

function displayHeadlines(articles) {
    articles.forEach(function (article) {
        setTimeout(displayOnDiv,5000)

        function displayOnDiv() {
            let divIndex = parseInt(Math.random() * divIDs.length)
            let tag = (divIDs.splice(divIndex,1))[0]
            $(`#${tag}`).append(`${article.headline.main}`)
        }
    })

	// const headlineList = `<ul>${articles.map(art => '<li>' +
 //    `<a href="${art.web_url}" target="_blank"
 //    > ${art.headline.main}</a>` + '</li>').join('')}</ul>`
	// $('#headlines')[0].innerHTML = headlineList
}

// function displayOnDiv(article) {
//     let divIndex = parseInt(Math.random() * divIDs.length)
//     let tag = (divIDs.splice(divIndex,1))[0]
//     $(`#${tag}`).append(`${article.headline.main}`)
// }



