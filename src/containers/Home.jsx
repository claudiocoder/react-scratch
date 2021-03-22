import React from 'react';
import initialState from '../initialState';
import Products from '../components/Products';

export default function Home() {
  return (
    <div>
      <Products products={initialState.products} />
    </div>
  );
}
