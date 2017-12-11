import axios from 'axios';

export function getUsers(input) {
  return axios.get(`https://api.github.com/search/users?q=${input}+in:login`);
}