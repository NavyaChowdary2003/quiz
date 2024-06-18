export const setProduct = products => ({

    type : "SET_PRODUCTS",
    payload : products

}
)

export const selectproduct = product => ({
    type : "SELECT_PRODUCT",
    payload : product
})


export const removeproduct = () => ({
    type : "REMOVE_PRODUCT",
  
})