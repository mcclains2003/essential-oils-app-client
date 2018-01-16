export default (state = [], action) => {
    switch(action.type) {
        case 'GET_OILS_SUCCESS':
            let sortedOils = action.oils.sort(function(a, b){ return a.count < b.count; });
            
            return sortedOils;
        case 'CREATE_OIL_SUCCESS':
            return state.concat(action.oil);
        case 'DELETE_OIL_SUCCESS':
            return state.filter(oil => oil.id !== action.oil.id);
        case 'INCREMENT':
            let replaceOil = state.map(oil => {
                if(oil.id === action.oil.id)
                    return Object.assign({}, action.oil)
                return oil
            })

            let replacedSortedOil = replaceOil.sort(function(a, b){ return a.count < b.count; });

            return replacedSortedOil
        default:
            return state;
    }
}