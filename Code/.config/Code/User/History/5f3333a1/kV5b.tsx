import React from "react";
import type {Collection} from '../../gtypes.d'
import SHOP_DATA from '../../shopData'
interface ShopState{
    collections:Collection[]
}

class Shop extends React.Component<{}>{
    constructor(props:{}){
        super(props)
        this.collections = SHOP_DATA
    }
}