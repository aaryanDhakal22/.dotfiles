import React from "react";
import type {Collection} from '../../gtypes.d'
import SHOP_DATA from '../../shopData'
import 
interface ShopState{
    collections:Collection[]
}

class Shop extends React.Component<{},ShopState>{
    constructor(props:{}){
        super(props)
        this.state = {
            collections: SHOP_DATA
        }
    }
    render(){
        return (
            <div>
                
            </div>
        )
    }
}
export default Shop