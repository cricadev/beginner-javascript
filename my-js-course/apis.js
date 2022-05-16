const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const userEl = document.querySelector('.user');

async function displayUser(username) {
  userEl.textContent = 'loading...';

  const response = await fetch(`${usersEndpoint}/${username}`);
  const data = await response.json();
  console.log(response);

  console.log(data);
  console.log(data.bio);
  console.log(data.name);
  userEl.textContent = `${data.name}'s bio: ${data.bio}`;
}

function handleError(err) {
  console.error('OH NOOOO');
  console.error(err);
  userEl.textContent = `Something went wrong: ${err}`;
}

displayUser('cricadev').catch(handleError);
