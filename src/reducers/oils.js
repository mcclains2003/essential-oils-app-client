export default (state = [], action) => {
    switch(action.type) {
        case 'GET_OILS_SUCCESS':
            let sortedOils = action.oils.sort(function(a, b){ return a.name > b.name; });
            
            return sortedOils;
        case 'CREATE_OIL_SUCCESS':
            return state.concat(action.oil);
        case 'DELETE_OIL_SUCCESS':
            return state.filter(oil => oil.id !== action.oil.id);
        default:
            return state;
    }
}