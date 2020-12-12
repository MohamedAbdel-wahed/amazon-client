export const addProduct= (product)=>{
  return {
     type: 'ADD_PRODUCT',
     payload: product
  }
}

export const removeProduct= (products)=>{
  return {
     type: 'REMOVE_PRODUCT',
     payload: products
  }
}


export const getProducts= (products)=>{
  return {
     type: 'GET_PRODUCTS',
     payload: products
  }
}


