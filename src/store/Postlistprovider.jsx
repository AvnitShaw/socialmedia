import { createContext, useReducer } from "react";

const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const Default=()=>{

}
const postListReducer =(currentPostList,action)=> {
  return currentPostList;

}
const PostListProvider = ({ children }) => {
  const [postList, dispatchpostList] = useReducer();

  const addPost = () => {};
  const deletePost = () => {};

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};
export default PostListProvider;
