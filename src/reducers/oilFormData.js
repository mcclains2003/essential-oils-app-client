const initialState = {
    name: '',
    description: '',
    uses: '',
    fragrance_profile: '',
    medical_properties: '',
    count: 0
}

export default (state = initialState, action) => {

    switch(action.type) {
        case 'UPDATED_DATA':
            return action.oilFormData;
        case 'RESET_OIL_FORM':
            return initialState;
        default:
            return state;
    }
}