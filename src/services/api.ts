import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3333',
});

/*
Para rodar a fake API, abra um terminal e digite: yarn server.
Em seguida, em outro terminal, digite: yarn start
*/
