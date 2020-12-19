export const cartReducer= (state,action)=>{
    let totalCount= 0
    let totalPrice= 0
   switch(action.type){
       case 'ADD_PRODUCT':
            const index= state.products.findIndex(product=> product.id===action.payload.id)
            state.products[index]= action.payload
            state= {...state, products: state.products}
            // get totalCount & totalPrice
            state.products.map(({quantity,price})=>{
                quantity= parseInt(quantity)
                totalCount+= quantity
                totalPrice+= quantity*price
            })
            totalPrice= Math.round(totalPrice * 100) / 100
            state= {...state, totalCount, totalPrice}
            return state
       case 'GET_PRODUCTS':
           state= {...state, products: action.payload}
           return state
        case 'REMOVE_PRODUCT':
           state= {...state, products: action.payload}
            // get totalCount & totalPrice
            state.products.map(({quantity,price})=>{
                quantity= parseInt(quantity)
                totalCount+= quantity
                totalPrice+= quantity*price
            })
            totalPrice= Math.round(totalPrice * 100) / 100
            state= {...state, totalCount, totalPrice}
           return state
       default: 
           console.log(`${action.type} is not valid`)
   }
}