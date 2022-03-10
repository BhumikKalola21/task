export default {
    loginFailed(state){
        return state.isLoginFailed;
    },
    userData(state){
        return {
            userName: state.userName,
            email: state.email,
            password: state.password,
        };
    },
    isAuth(state){
        return state.isAuth;
    },
};