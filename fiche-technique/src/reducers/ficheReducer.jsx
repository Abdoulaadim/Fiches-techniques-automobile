const initialState = {
    fiches: [],
    fiche: {}
};

export default function defaults(state = initialState, action) {

    switch(action.type) {
        case 'GET_CONTACTS': 
        console.log(state);
        return {
          ...state,
          fiches: action.payload
        }
        default: {
            return state;
        }
    }

}