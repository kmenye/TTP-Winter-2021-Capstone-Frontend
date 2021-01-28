import axios from "axios";

import {
  GOT_ALL_STUDENTS,
  GOT_STUDENT_BY_ID,
  CREATED_STUDENT,
  GOT_ALL_CAMPUSES,
  GOT_CAMPUS_BY_ID,
  CREATED_CAMPUS,
  GOT_ALL_USERS,
  GOT_ALL_ITEMS,
} from "./actionTypes";

// better way to import all these?

const initialState = {
  students: [],
  student: {},
  campuses: [],
  campus: {},
  users: [],
  items: [],
};

const gotAllStudents = (data) => {
  return {
    type: GOT_ALL_STUDENTS,
    data,
  };
};

export const getAllStudents = () => {
  return async (dispatch) => {
    try {
      // http:// resolves CORS error, thank you stack overflow
      const response = await axios.get("http://localhost:8080/api/students/");
      console.log("getAllStudents axios response:", response);
      dispatch(gotAllStudents(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

const gotAllUsers = (data) => {
  return {
    type: GOT_ALL_USERS,
    data,
  };
};

export const getAllUsers = () => {
  return async (dispatch) => {
    try {
      // http:// resolves CORS error, thank you stack overflow
      const response = await axios.get("http://localhost:8080/api/users/");
      console.log("getAllUsers axios response:", response);
      dispatch(gotAllUsers(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

const gotAllItems = (data) => {
  return {
    type: GOT_ALL_ITEMS,
    data,
  };
};

export const getAllItems = () => {
  return async (dispatch) => {
    try {
      // http:// resolves CORS error, thank you stack overflow
      const response = await axios.get("http://localhost:8080/api/items/");
      console.log("getAllItems axios response:", response);
      dispatch(gotAllItems(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

const gotStudentByID = (data) => {
  return {
    type: GOT_STUDENT_BY_ID,
    data,
  };
};

export const getStudentByID = (id) => {
  return async (dispatch) => {
    try {
      // http:// resolves CORS error, thank you stack overflow

      console.log("getStudentByID axios response:", response);
      // dispatch(gotAllStudents(response.data));
      const response = await axios.get(`c`);
      dispatch(gotStudentByID(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_ALL_STUDENTS:
      return {
        ...state,
        students: action.data,
      };
    case GOT_ALL_USERS:
      return {
        ...state,
        users: action.data,
      };
    case GOT_ALL_ITEMS:
      return {
        ...state,
        items: action.data,
      };
    default:
      return state;
  }
};

export default rootReducer;
