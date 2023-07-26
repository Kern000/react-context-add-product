import React, {useContext} from "react";
import ProductContext from "./ProductContext";

export default function ProductListing(){
    let context=useContext(ProductContext);

    return(
        <React.Fragment>
            <ul className="list-group">
            {context.products().map(p =>
                <li className="list-group-item mb-2">
                    {'Product Name: ' + p.product_name}
                    <br/>
                    {p.cost}                   
                </li>
            )
            }
            </ul>
        </React.Fragment>
    )



}
