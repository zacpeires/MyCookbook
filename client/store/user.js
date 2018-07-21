import axios from "axios";
import history from "../history";

const GET_USER = "GET_USER";
const REMOVE_USER = "REMOVE_USER";
const ADD_USER = "ADD_USER";

const defaultUser = {};

const getUser = user => ({ type: GET_USER, user });
const removeUser = () => ({ type: REMOVE_USER });
const addUser = user => ({ type: ADD_USER, user });

export const createUser = (userDetails) => {
  return async dispatch => {
   const { data } = await axios.post('api/users/', userDetails)
   dispatch(addUser(data))
  }
}


export default (state = defaultUser, action) => {
  switch (action.type) {
    case GET_USER:
      return action.user;
    case ADD_USER:
      return action.user;
    case REMOVE_USER:
      return defaultUser;
    default:
      return state;
  }
};
