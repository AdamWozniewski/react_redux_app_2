import ACTION from '../static/ACTION';

export function login(person, psswd) {
    console.log("ActionCreator--- akcja logowanie");
    return {
        type: ACTION.LOGIN,
        person, psswd
    }
}

export function createNewCustomer() {
    console.log("ActionCreator--- akcja nowy user");
    return {
        type: ACTION.CREATE_CUSTOMER,
        // login, name, psswd
    }
}