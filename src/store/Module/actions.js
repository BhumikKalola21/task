export default{
    registration(_, payload){
        sessionStorage.setItem("userName", payload.userName);
        sessionStorage.setItem("email", payload.email);
        sessionStorage.setItem("password", payload.password);
    },
    addData(context){
        let fetchDetails = {};
        fetchDetails.userName =  sessionStorage.getItem("userName");
        fetchDetails.email = sessionStorage.getItem("email");
        fetchDetails.password = sessionStorage.getItem("password");
        context.commit('login', fetchDetails);
    },
    login(context, payload){
        if(payload.email == sessionStorage.getItem("email") && payload.password == sessionStorage.getItem("password")){
            sessionStorage.setItem("isAlreadyLogin", "yes");
            return context.dispatch('addData');
        }
        else{
            context.commit('loginFailed');
        }
    },
    
};