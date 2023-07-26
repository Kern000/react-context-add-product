import React, {useState, useMemo} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import ProductContext from './ProductContext';
import AddProduct from './addProduct';
import ProductListing from './ProductListing';

export default function App(){
  const [products, setProducts] = useState(
    [
      {
        id: 1,
        product_name: "ACME Anvils",
        cost: 9.99
      },
      {
        id: 2,
        product_name: "ACME Hammers",
        cost: 19.99
      },
      {
        id: 3,
        product_name: "ACME Screwdrivers",
        cost: 29.99
      }
    ]
  )

  const context = useMemo(()=>{
    return {
      products: () => {return products},
      addProducts: (productName, productCost) => {
        setProducts(
          [...products,
           {id: Math.floor(Math.random()*10000),
            product_name: productName,
            cost: productCost
           }
          ]
        )
      }
    }
  }, [products]         //context only recreated when products state change
  )

  return(
    <div className="container-fluid">
      <h1> Products </h1>
      <ProductContext.Provider value={context}>
        <React.Fragment>
          <ProductListing />
          <AddProduct />
        </React.Fragment>        
      </ProductContext.Provider>
    </div>
  )
}

// anything nested in ProductContext.Provider will be able to us context
// pass in the variable 'context' as value that we created
