export default (state = {}, action) => {
    switch(action.type) {
        case 'GET_OIL_SUCCESS':
            return action.oil;
        case 'UPDATED_OIL_SUCCESS':
            return action.oil;
        // case 'INCREMENT':
        //     return action.oil;
        default:
            return state;
    }
}