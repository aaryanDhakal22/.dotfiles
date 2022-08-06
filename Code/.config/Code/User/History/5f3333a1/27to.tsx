import React from "react";
import type {Collection} from '../../gtypes.d'
import SHOP_DATA from '../../shopData'
import CollectionPreview from "../../components/collection-preview/collection-preview.component"
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
                {
                    this.state.collections.map((item)=>{

                        <CollectionPreview  />
                    })
                }
            </div>
        )
    }
}
export default Shop