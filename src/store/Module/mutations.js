export default { login(state, payload){
    state.isLoginFailed = false;
    state.isAuth = true;
    state.userName = payload.userName;
    state.email = payload.email;
    state.password = payload.password;
},
loginFailed(state){
    state.isLoginFailed = true;
},

loginRequired(state){
    state.isAuth = false;
},
};