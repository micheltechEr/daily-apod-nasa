const url = "https://api.nasa.gov/planetary/apod?api_key=";
const key = "fR8GLAeajZ0hUjoZHHByoUz1cJInfxl6GpKG9pCg";

const completeUrl = url + key
function getUser() {
    axios.get(completeUrl)
    .then(response=>{
        document.getElementById('explanation').innerHTML = response.data.explanation;
        document.getElementById('banner-day').style.backgroundImage = `url(${response.data.hdurl})`
        document.getElementById('apod-name').innerHTML = response.data.title;
        document.getElementById('apod-date').innerHTML = response.data.date;

        console.log(response);
    })
    .catch(error=>console.log(error))
}

getUser()

function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}