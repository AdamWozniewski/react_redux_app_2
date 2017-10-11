import ACTION from '../static/ACTION';

export function login(person, psswd) {
    console.log("ActionCreator--- akcja logowanie");
    return {
        type: ACTION.LOGIN,
        person, psswd
    }
}

export function forgottenPassword({email}) {
    return {
        type: ACTION.FORGOTTEN_PASSWORD,
        email
    }
}

export function createNewCustomer({login, name, psswd}) {
    console.log("ActionCreator--- akcja nowy user");
    return {
        type: ACTION.CREATE_CUSTOMER,
        login, name, psswd
    }
}

export function openSnack() {
    console.log("Snack jest Otwarty !")
    return {
        type: 'OPEN_SNACK', open: true
    }
}