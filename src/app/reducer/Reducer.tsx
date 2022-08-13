import { actions } from '../action/Action'

export const initialState = {
    postData: [],
};

//Reducer to Handle Actions
export const DataReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case actions.POST_DATA:
            return {
                ...state,
                postData: [
                    action.postDataArray
                ]
            };

        case actions.SEARCHED_DATA:
            return {
                ...state,
                postData: [
                    action.searchedDataArray
                ]
            };
        default:
            return state;
    }

};