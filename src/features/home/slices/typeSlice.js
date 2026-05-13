const CLICK = "CLICK";
export const click = (list) => {
    return {
        type: CLICK,
        data: list
    }
};
const initialState = {data: null};
export const typeReducer = (state = initialState, action) => {
    if(action.type === "CLICK") return {data:action.data};
    else return state;
};

