import persona from '../data/persons';
import ACTION from '../static/ACTION'
// function person(state = [], action) {
function person(state = persona, action) {
    switch (action.type) {
        case ACTION.LOGIN:
            return state;
        case ACTION.CREATE_CUSTOMER:
            return [
                ...state, {
                    name: action.name,
                    login: action.login,
                    psswd: action.psswd
                }
            ]
        case ACTION.FORGOTTEN_PASSWORD:
            return state;
        default: return state;
    }
}

export default person;