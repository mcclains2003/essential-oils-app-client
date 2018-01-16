import { resetOilForm } from './oilForm';

const API_URL = process.env.REACT_APP_API_URL;

// ** Action Creators **
const setOils = oils => {
    return {
        type: 'GET_OILS_SUCCESS',
        oils
    }
}

const setOil = oil => {
    return {
        type: 'GET_OIL_SUCCESS',
        oil
    }
}

const addOil = oil => {
    return {
        type: 'CREATE_OIL_SUCCESS',
        oil
    }
}

const updateOil = oil => {
    return {
        type: 'UPDATED_OIL_SUCCESS',
        oil
    }
}

const destroyOil = oil => {
    return {
        type: 'DELETE_OIL_SUCCESS',
        oil
    }
}

const updateCount = oil => {
    return {
        type: 'INCREMENT',
        oil
    }
}

// ** Async Actions **
export const fetchOils = () => {
    return dispatch => {
        return fetch(`${API_URL}/oils`)
            .then(response => response.json())
            .then(oils => dispatch(setOils(oils)))
            .catch(error => console.log(error));
    }
}

export const fetchOil = oilID => {
    return dispatch => {
        return fetch(`${API_URL}/oils/${oilID}`)
            .then(response => response.json())
            .then(oil => dispatch(setOil(oil)))
            .catch(error => console.log(error));
    }
}

export const createOil = (oil, routerHistory) => {
    const request = {
        method: 'POST',
        body: JSON.stringify({ oil: oil }),
        headers: {
          'Content-Type': 'application/json'
        }
    };

    return dispatch => {
        return fetch(`${API_URL}/oils`, request)
            .then(response => response.json())
            .then(oil => {
                dispatch(addOil(oil))
                dispatch(resetOilForm());
                routerHistory.replace(`/oils`)
            })
            .catch(error => console.log(error));
    }
}

export const editOil = (oil, routerHistory) => {
    const request = {
        method: 'PUT',
        body: JSON.stringify({ oil: oil }),
        headers: {
          'Content-Type': 'application/json'
        }
    };
    
    return dispatch => {
        return fetch(`${API_URL}/oils/${oil.id}`, request)
            .then(response => response.json())
            .then(oil => {
                dispatch(updateOil(oil));
                routerHistory.replace(`/oils/${oil.id}`)
            })    
            .catch(error => console.log(error));
    }
}

export const deleteOil = (oilID, routerHistory) => {
    const request = { 
        method: 'DELETE'
    };

    return dispatch => {
        return fetch(`${API_URL}/oils/${oilID}`, request)
            .then(response => response.json())
            .then(oil => {
                dispatch(destroyOil(oil));
                routerHistory.replace(`/oils`)
            })
            .catch(error => console.log(error));
    }
}

export const editCount = (oil) => {
    const request = {
        method: 'PUT',
        body: JSON.stringify({ oil: oil }),
        headers: {
          'Content-Type': 'application/json'
        }
    };

    return dispatch => {
        return fetch(`${API_URL}/oils/${oil.id}`, request)
            .then(response => response.json())
            .then(oil => {
                dispatch(updateOil(oil))
                dispatch(updateCount(oil));
            })    
            .catch(error => console.log(error));
    };
}