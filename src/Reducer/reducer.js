
const initState = {
    pathName : ""

}
const CartReducer = (state = initState, action) => {
    switch (action.type) {
        case'pathName':
            return{
                ...state,
                pathName:state.pathName = action.payload

            }
  
                default:
            return state
    }
};
export default CartReducer;