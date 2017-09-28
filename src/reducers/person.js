import persona from '../data/persons';

// function person(state = [], action) {
function person(state = persona, action) {
    switch (action.type) {
        case 'CREATE_CUSTOMER':
            console.log("Utworzono nowego usera");
            return state
        default: return state;
    }
}

export default person;