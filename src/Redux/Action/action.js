import axios from "axios";
import * as types from "./actiontypes";
const getLocationData = (params) => (dispatch) => {
  dispatch({ type: types.GET_LOCATIONDATA_REQUEST });
  return axios
    .get(`https://resisted-cubic-zydeco.glitch.me/booking?city=${params}`)
    .then((res) =>
      dispatch({
        type: types.GET_LOCATIONDATA_SUCCESS,
        payload: res.data[0],
      })
    )
    .catch((err) =>
      dispatch({
        type: types.GET_LOCATIONDATA_FAILURE,
        payload: err,
      })
    );
};
export { getLocationData };
