const CHOOSE = "CHOOSE";
export const choose = (list) => {
    return {
        type: CHOOSE,
        data: list
    }
};
const initialState = {data: null};
export const detailReducer = (state = initialState, action) => {
    if(action.type === "CHOOSE") return {data:action.data};
    else return state;
};