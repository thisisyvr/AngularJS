app.factory("my_service",my_service);
function my_service() {
    /*return {
        "login":login,
        "logout":logout
    };*/

    return new class_one({'login':'Welocome to Login Module !',
                            'logout':'Welcome to Logout Module !'}).fun_one();
}

function login() {
    return "Welocome to Login Module !";
}

function logout() {
    return "Welcome to Logout Module !";
}