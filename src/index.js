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
  let context =
    "Act as the comedian Taylor Tomlinson. Come up with funny cat-related jokes. Think of some clever puns, observations, and humorous situations related to cats.";
  let prompt =
    "Act as the comedian Taylor Tomlinson. Come up with funny cat-related jokes. Think of some clever puns, observations, and humorous situations related to cats.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  let joke = document.querySelector("#joke");

  joke.innerHTML =
    "Please wait a few second while we are generating your joke...";

  axios.get(apiUrl).then(displayJoke);
}

let buttonElement = document.querySelector("#joke-button");
buttonElement.addEventListener("click", generateJoke);
