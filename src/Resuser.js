const Resuser =(cart = [] ,action)=>{

    if(action.type === "ADD"){
        let product = cart.filter((item)=> item.id === action.payload.id)
        if(product < 1){
            return [...cart , action.payload]
        }
        else{
            alert("تو سفارشاتت هست")
            return cart;
        }
    }



    return cart;
}

export default Resuser;