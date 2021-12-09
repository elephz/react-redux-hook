import { BOX1_ACTION_ADD } from "../Constants"

const initialState = {
    counter1:0
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

   case BOX1_ACTION_ADD:
       return {...state,counter1:state.counter1+1}

    default:
        return state
    }
}
