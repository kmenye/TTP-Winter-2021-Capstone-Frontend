import axios from "axios";
import { bindActionCreators } from "redux";
import {GOT_SINGLE_USER} from "./actiontypes";

const initialState = {

    user: [],
}

const gotSingleUser = (payload) => ({
    type: GOT_SINGLE_USER,
    payload,
});

export const fetchSingleUserThunk = () => {
    return async (dispatch) => {
        try{
            const { data} = await axios.get(`https://localhost:8080/api/user`);
            console.log('data', data);
            dispatch(gotSingleUser(data));
        } catch (error){
            console.error(error);
        }
    }
}

export const postSingleUserThunk = (userObj) => {
    console.log("THUNK SINGLE USER");
    return async (dispatch) => {
        try {
            await axios.post(`https://localhost:8080/api/user/newUser`)
            .then(response => {
                console.log(response)
            })
        } catch (error ){
            console.error(error);
        }
    }
}



const INITIAL_STATE = {
  user: [],
};

const rootReducer = (state = INITIAL_STATE, action) => {
  console.log('PL', action);
  switch (action.type) {
    case GOT_SINGLE_USER:
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
