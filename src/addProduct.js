import React, { useState, useContext } from 'react';
import ProductContext from './ProductContext';

export default function AddProduct(){
    const context= useContext(ProductContext)

    const [productName, setProductName] = useState('')
    const [cost, setCost] = useState(0)

    const updateFormField = (event) => {
        if (event.target.name === 'product_name') {
            setProductName(event.target.value)
        } else if (event.target.name === 'cost') {
            setCost(event.target.value)
        }
    }

    const onAddProduct = () => {
        context.addProducts(productName, cost);
    }

    return(
        <React.Fragment>
            <h1> Add New Product </h1>
            <div className="container ms-2">
                <label className="me-1"> Product Name: </label>
                <input  type="text"
                        name="product_name"
                        value={productName}
                        onChange={updateFormField}
                />
            </div>
            <div className="container ms-2">
                <label className="me-1"> Product Cost: </label>
                <input  type="text"
                        name="cost"
                        value={cost}
                        onChange={updateFormField}
                />
            </div>
            <button className="btn btn-primary ms-2"
                    onClick={onAddProduct}>
            Add
            </button>
        </React.Fragment>
    )
}