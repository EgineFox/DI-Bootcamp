export const ACTION_INCREMENT = "INCREMENT"
export const ACTION_DECREMENT = "DECREMENT"
export const ACTION_BY_VAL = "INCREMENTBYVALUE"


const initialState = {
    count: 5
}

export const counterReducer = ( state=initialState, action) => {
    switch(action.type) {

        case ACTION_INCREMENT:
             return { ...state, count: state.count + 1};
        case ACTION_DECREMENT:
             return { ...state, count: state.count - 1};
        case ACTION_BY_VAL :
             return { ...state, count: state.count + Number(action.payload) };
        default:
         return state;
    }
};