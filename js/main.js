// Page Elements
const main = document.getElementsByTagName('main')[0];

// News API Data

const apiKey = 'afceaae04b80419dbdc917b434604414';
const engadgetUrl = 'https://newsapi.org/v1/articles?source=the-next-web&apiKey=';

// Request News Function

async function getNews(url) {
    let response = await fetch(url + apiKey);
    let jsonResponse = await response.json();
    let articlesArray = jsonResponse.articles.slice(0, 5);
    console.log(jsonResponse);
    return articlesArray;
}

// Render Function

function renderNews(articles) {
    articles.map((article, index) => {
        let articleRow =
            '<div class="card mb-2">' +
            ' <div class="card-body">' +
            '<a href="' + article.url + '">' +
            '<img src="' + article.urlToImage + '" alt="" width="300">' +
            '   <h2 class="title">' + article.title + '</h2>' +
            '   <h3>By ' + article.author + '</h3>' +
            '   <p> ' + article.description + '</p>' +
            '</a' +
            ' </div>' +
            '</div>';

        main.innerHTML += articleRow;
    });
    return articles;
}


main.innerHTML = ' ';
getNews(engadgetUrl).then(articlesArray => renderNews(articlesArray)).then(articles => sendTweets(articles));