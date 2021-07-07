
import cartActionTypes from './cartActionTypes'

export const bugAdded = description => ({
    type: cartActionTypes.BUG_ADDED,
    payload: {
        description // The shorthand syntax since the key is same as value
    }
});