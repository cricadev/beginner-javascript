const baseEndpoint = `https://api.spoonacular.com/recipes/complexSearch?apiKey=3eb709ac04c34983b3f4259d5fbc0226&query`;
const proxy = 'https://cors-anywhere.herokuapp.com/'; // proxy to bypass CORS
const form = document.querySelector('form.search');
const recipesGrid = document.querySelector('.recipes');

async function fetchRecipes(query) {
  // fetch whatever you want from the api
  const res = await fetch(
    `${proxy}${baseEndpoint}=${query}&addRecipeInformation=true`
  );
  // parsed to a json object
  const data = await res.json();
  // console.log(res);
  // console.log(data);
  // console.log(data.results);
  // iterate and get all of the data you want
  for (let i = 0; i < data.results.length; i += 1) {
    // console.log(data.results[i].id);
    // console.log(data.results[i].title);
  }
  return data;
}

async function handleSubmit(event) {
  event.preventDefault();
  const el = event.currentTarget;
  // turn the form off
  el.submit.disabled = true;
  // submit the search
  const recipes = await fetchRecipes(el.query.value);
  console.log(el.query.value);
  el.submit.disabled = false;
  console.log(recipes);
  console.log(recipes.results);
  displayRecipes(recipes.results);
}

function displayRecipes(recipes) {
  console.log('creating html');
  const html = recipes.map(
    (recipe) => `<div class="recipe">
    <h2>${recipe.title}</h2>
    <p>Healthy Score: ${recipe.healthScore}</p>
    <img src="${recipe.image}" alt="${recipe.title}">
    <p>${recipe.summary}</p>
    <h3>Ingredients</h3>
    <p>${recipe.ingredients}</p>
    </div>`
  );
  console.log(html);
  recipesGrid.innerHTML = html.join('');
}
form.addEventListener('submit', handleSubmit);
// fetchRecipes('Pizza');

// CO = CROSS-ORIGIN

// WESBOS.COM / THESE ARE ORIGINS

// GITHUB.COM
// CO
// wesbos. com
// NO NO NO
// recipepuppy.com
//
// CORS Policy
//
// Ok, ummmm, wesbos.com is allowed to ask
//
// for data and we will return it, that is
// safe.
