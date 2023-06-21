import {createSlice} from "@reduxjs/toolkit"

const cartSlice=createSlice({
    name:'cart',
    initialState:[],
        reducers:{
        addProductToCart(state,action){
            // let myIndex=-1;
            // state.map((item,index)=>{
            //     if(item.id==action.payload.id){
            //         myIndex=index
            //     }
            //     if(myIndex=-1){
            //         state.push(action.payload)
            //     }
            //     else{
            //         state[myIndex].qty=action.payload.qty+1
            //     }
            // })
            const item = action.payload;
            let productItem = state.find(product => product.id === item.id);
            if (productItem) {
              productItem.quantity += 1;
            }
            else{
                state.push(item);
            }
        },
    }
})

export const{addProductToCart}=cartSlice.actions
export default cartSlice.reducer