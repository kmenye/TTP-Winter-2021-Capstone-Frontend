//BOILERPLATE (kept for reference)
// import PlayerActionTypes from '../actions/player.types';

// const INITIAL_STATE = {
//   allPlayers: [],
// };

// const playerReducer = (state = INITIAL_STATE, action) => {
//   console.log('PL', action);
//   switch (action.type) {
//     case PlayerActionTypes.FETCH_ALL_PLAYERS:
//       return { ...state, allPlayers: action.payload };
//     default:
//       return state;
//   }
// };

// export default playerReducer;

import axios from "axios"

import {
  CREATED_USER,
  DELETED_USER,
  GOT_ELECTRONICSDROPOFF,
  GOT_PHARMADROPOFF,
  GOT_COMPOSTDROPOFF,
  GOT_TEXTILESDROPOFF,
} from "../actions/actionTypes"

const initialState = {
  dropOffSites: {},
  dropOffAddresses: [],
};