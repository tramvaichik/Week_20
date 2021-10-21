// document.addEventListener("DOMContentLoader", function (event) {

fetch("https://api.nasa.gov/planetary/apod?api_key=JCUS23sYLZHk4p87qgVwiGyRN3ao3lPboQnHJuh0")
    .then(response =>
        response.json())
    .then(planetary => {
        document.getElementById("img").src = planetary.url;
        document.getElementById("title").textContent = planetary.title;
        document.getElementById("facts").textContent = planetary.explanation;
    })

    .catch(error => console.log(error));
// });