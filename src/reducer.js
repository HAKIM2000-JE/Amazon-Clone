import React from 'react';
import { StateProvider } from './StateProvider';


export const initialState={
    basket : [],
    user : null,
};

export const getBasketTotal= (basket)=>
    basket.reduce((amount,item)=>item.price + amount,0);

const reducer =(state, action)=>{
    console.log(action);

    switch(action.type) {
        case 'SET_USER':
            return{
                ...state,
                user: action.user,

            }
        case 'ADD_TO_BASKET':
            return{
               ...state,
               basket :[...state.basket, action.item]
            } 
        case 'REMOVE_FROM_BASKET':
            //we cloned basket
            let newBasket=[...state.basket];

            const index =state.basket.findIndex((basketItem)=>basketItem.id===action.id);
           
            if(index>=0){
                //item existe , remove it
                console.log(index);
                console.log(action.id);
                newBasket.splice(index,1);

            }else{
                console.warn(
                    `Can't Remove product (id:${action.id})`
                )
            }

            return {...state , basket :newBasket};
        default:
            return state;
    }
}

export default reducer;