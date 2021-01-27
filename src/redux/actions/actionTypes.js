
//BOILERPLATE (kept for reference)
// import axios from 'axios';
// import PlayerActionTypes from './player.types';

// //ACTION CREATORS
// export const fetchAllPlayers = (payload) => ({
//   type: PlayerActionTypes.FETCH_ALL_PLAYERS,
//   payload,
// });

// //THUNKS

// export const fetchAllPlayersThunk = () => {
//   return async (dispatch) => {
//     try {
//       const { data } = await axios.get('http://localhost:8080/api/players');
//       console.log('data', data);
//       dispatch(fetchAllPlayers(data));
//     } catch (error) {
//       console.error(error);
//     }
//   };
// };

export const CREATED_USER = "CREATED_USER"
export const DELETED_USER = "DELETED_USER"
export const GOT_ELECTRONICSDROPOFF = "GOT_ELECTRONICSDROPOFF"
export const GOT_PHARMADROPOFF = "GOT_PHARMADROPOFF"
export const GOT_COMPOSTDROPOFF = "GOT_COMPOSTDROPOFF"
export const GOT_TEXTILESDROPOFF = "GOT_TEXTILESDROPOFF"

