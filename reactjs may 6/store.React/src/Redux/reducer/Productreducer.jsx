const intialState = {
    products : []
}
                           //actions  -destructructuring
export const setProductreducer = (state = intialState,{type,payload}) => {
  
    switch(type){
        case "SET_PRODUCTS":
           
            return {...state,products:payload}
        default : 
        return state
    }
}


export const selectProductreducer = (state = {},{type,payload}) => {
  
    switch(type){
        case "SELECT_PRODUCT":
           
            return {...state,...payload}

            case "REMOVE_PRODUCT":
            return {}
        default : 
        return state
    }
}
