// function person(state = [], action) {
function snacks(state = {}, action) {
    switch (action.type) {
        case 'OPEN_SNACK':
            console.log("Utworzono nowego usera SNACK");
            return {
                ...state,
            }
        default: return state;
    }
}

export default snacks;