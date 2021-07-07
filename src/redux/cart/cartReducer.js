
import cartActionTypes from './cartActionTypes';

const INITIAL_STATE = [];
let lastId = 0;

const cartReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case cartActionTypes.BUG_ADDED:
            return [
                ...state,
                {
                    id: ++lastId,
                    description: action.payload.description,
                    resoved: false
                }
            ]

        case cartActionTypes.BUG_REMOVED:
            return state.filter(bug => bug.id !== action.payload.id)
        default:
            return state
    }
};

export default cartReducer;