const API_URL = "https://api.github.com";

const USER_SEARCH_ENDPOINT = `${API_URL}/search/users?q=`;
const USER_ENDPOINT = `${API_URL}/users`;

const searchUserByName = async (usernameFragment) => {
  try {
    let response = await fetch(`${USER_SEARCH_ENDPOINT}${usernameFragment}&per_page=100`,
      {
        headers: {
          Accept: 'application/vnd.github.text-match+json'
        }
      });
    let result = await response.json();
    return result;
  }
  catch(e) {
    console.log(e.message);
    alert('ERROR ON: user search response');
    return [];
  }
}

const getUserByName = async (userName) => {
  try {
    let response = await fetch(`${USER_ENDPOINT}/${userName}`);
    let result = await response.json();
    return result;
  }
  catch(e) {
    console.log(e.message);
    alert('ERROR ON: get user response');
    return null;
  }
}

const getReposEndpoints = async (userName) => {
  try {
    let response = await fetch(`${USER_ENDPOINT}/${userName}/repos?per_page=100`);
    let result = await response.json();
    return result;
  }
  catch(e) {
    console.log(e.message);
    alert('ERROR ON: user repositories response');
    return [];
  }
} 



export { searchUserByName, getReposEndpoints, getUserByName }