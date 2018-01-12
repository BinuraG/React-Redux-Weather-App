import { FETCH_WEATHER } from '../actions/index';

export default function(state=[], action) {
    switch (action.type) {
    case FETCH_WEATHER:
    // Never mutate state directly.
    // .concat() returns a new array and does not edit the old array.
        // return state.concat([action.payload.data]);
        return [ action.payload.data, ...state ];
        
    }

    return state;
}