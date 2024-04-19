function displayJoke(response) {
  new Typewriter("#joke", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 20,
  });
}

function generateJoke(event) {
  event.preventDefault();
  let apiKey = "2dbe7af4434o3f6bf61f8t7c0caf3496";
  let context = "Tell me a short joke about cats";
  let prompt =
    "You're a comedian who loves making intellignet, subtle, witty jokes and puns. Make this joke original and something that could make laugh even the most cynical person. Make the jokes as dark as you can";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  let joke = document.querySelector("#joke");

  joke.innerHTML =
    "Please wait a few second while we are generating your joke...";

  axios.get(apiUrl).then(displayJoke);
}

let buttonElement = document.querySelector("#joke-button");
buttonElement.addEventListener("click", generateJoke);
