import React, { useReducer, createContext } from 'react'
import App from '../../../App'
import { DataReducer, initialState } from '../reducer/Reducer';
import { actions } from '../action/Action';

export const PostListContext = createContext();

export const Provider = ({ children: any }) => {
  const [state, dispatch] = useReducer(DataReducer, initialState);

  const value = {
    postData: state.postData,
    addPostData: (postDataArray) => {
      dispatch({ type: actions.POST_DATA, postDataArray });
    },
    updatePostData: (searchedDataArray) => {
      dispatch({ type: actions.SEARCHED_DATA, searchedDataArray });
    }
  };

  return (
    <PostListContext.Provider value={value}>
      <App />
    </PostListContext.Provider>
  );
};
