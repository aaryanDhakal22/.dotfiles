import React from "react";
import type {Collection} from '../../gtypes.d'
import SHOP_DATA from '../../shopData'
interface ShopState{
    collections:Collection[]
}

class Shop extends React.Component<prop:{},state:ShopState>{
    constructor(props:{},state:ShopState){
        super(props)
        this.state = {
            collection:SHOP_DATA
        }
    }
}