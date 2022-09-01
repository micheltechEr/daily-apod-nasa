const url = "https://api.nasa.gov/planetary/apod?api_key=";
const key = "fR8GLAeajZ0hUjoZHHByoUz1cJInfxl6GpKG9pCg";

const completeUrl = url + key
function getUser() {
    document.getElementById('banner-day').insertAdjacentHTML('beforeend',`<p id="loading-message">Loading</p>`)
    axios.get(completeUrl)
    .then(response=>{
        document.getElementById('explanation').innerHTML = response.data.explanation;
        document.getElementById('banner-day').style.backgroundImage = `url(${response.data.hdurl})`
        document.getElementById("loading-message").remove()
        console.log(response);
    })
    .catch(error=>console.log(error))
}

getUser()