export function login(person, psswd) {
    return {
        type: 'LOGIN',
        person, psswd
    }
}

export function createNewCustomer(login, name, psswd) {
    return {
        type: 'CREATE_CUSTOMER',
        login, name, psswd
    }
}