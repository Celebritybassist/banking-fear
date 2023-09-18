class User{
    constructor(){}

    static login(username, password){
        window.sessionStorage.setItem(username, password);
    }

    static logout(){
         window.sessionStorage.clear();
    }
    
}