import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.0.2.2:3333',
});

export default api;

/*

  Para testar a api local tem que usar no lugar do "localhost" o ip do android studio
  que normalmente é 10.0.2.2

  também é possível rodar o comando:

  adb reverse tcp:3333 tcp:3333

*/
