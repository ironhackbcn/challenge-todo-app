import axios from 'axios';

class Auth {
  constructor() {
    this.auth = axios.create({
      // baseURL: process.env.REACT_APP_API_URL,
      baseURL: 'http://localhost:4000',
      withCredentials: true,
    });
  }
  create(task) {
    const { title, body } = task
    return this.auth
      .post('/api/v1/todos',{ title, body })
      .then(({ data }) => console.log(data));
  }
  getall() {
    return this.auth
      .get('api/v1/todos')
      .then(({ data }) => data);
  }
  delete(task) {
    return this.auth
      .delete(`api/v1/todos/${task}`)
      .then(({ data }) => data);
  }

  // signup(user) {
  //   const { username, email, password, photoUrl } = user;
  //   return this.auth
  //     .post('/auth/signup', { username, email, password, photoUrl })
  //     .then(({ data }) => data);
  // }
  // update(user) {
  //   const { username, email, oldpassword, password, photoUrl } = user;
  //   return this.auth
  //     .put('/user/update', { username, email, oldpassword, password, photoUrl })
  //     .then(({ data }) => data);
  // }
  // imageUpload(file) {
  //   return this.auth.post('/auth/signup/image', file)
  //   .then(({data}) => data)
  // }
  // changeImage(file) {
  //   return this.auth.post('/user/update/image',file)
  //   .then(({data}) => data)
  // }
  // login(user) {
  //   const { email, password } = user;
  //   return this.auth
  //     .post('/auth/login', { email, password })
  //     .then(({ data }) => data);
  // }
  // delete() {
  //   return this.auth
  //     .delete('/user/delete',{}).then(response => response.data)
  //     .then(({ data }) => data);
  // }

  // logout() {
  //   return this.auth.post('/auth/logout', {}).then(response => response.data);
  // }
  // addplayer(player) {
  //   return this.auth
  //     .post('player/addplayer',{player})
  //     .then(({data}) => data)
  //     .catch((err) => console.log(err))
  // }

  // creategame(game) {
  //   const { numberofquestions, webdevcheck, datanylcheck, uxcheck, name } = game;
  //   return this.auth
  //     .post('/game', { numberofquestions, webdevcheck, datanylcheck, uxcheck, name, gameStatus:'waitingForPlayers'})
  //       .then( (data) => data)
  //       .catch( (err) => console.log(err));
  // }
  // endgame(gameId) {
  //   return this.auth
  //     .patch('/game/end-game',{ gameId })
  // }
  // me() {
  //   return this.auth.get('/auth/me').then(response => response.data);
  // }
  // addQuestion(questionData) {
  //   return this.auth.post('/profile/addquestion',questionData)
  // }
  // startgame(gameId) {
  //   return this.auth.patch('/game/start-game',{gameId})
  // }
}

const axiosRequestFunctions = new Auth();

export default axiosRequestFunctions;
