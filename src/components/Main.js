/* eslint-disable array-callback-return */
import React from 'react'
import Product from './Product'

function Main(props) {
const { products, onAdd , onRemove} = props;

  return (
    <main className="block col-2">
      <h2>Products</h2>
      <div className="row">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            onAdd={onAdd}
            onRemove={onRemove}
          ></Product>
        ))}
      </div>
    </main>
  );
}

export default Main