import { FETCH_USER } from "../actions/types";
export default function(state = null, action) {
  const { payload, type } = action;
  switch (type) {
    case FETCH_USER:
      return payload || false;
    default:
      return state;
  }
}
