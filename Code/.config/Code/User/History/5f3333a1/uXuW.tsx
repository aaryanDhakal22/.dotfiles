import React from "react";
import type {Collection} from '../../gtypes.d'
import SHOP_DATA from '../../shopData'
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
}