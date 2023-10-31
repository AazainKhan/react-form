import React, { useState } from 'react';
import Category from './components/category'
import Product from './components/product'

function App() {
  const [categories, setCategories] = useState([]);

  const handleCategoryCreated = (categoryData) => {
    // Update the categories state with the new category
    setCategories([...categories, categoryData]);
  }

  return (
    <>
      <div className="forms">
        <div className="category">
          <Category categories={categories} onCategoryCreated={handleCategoryCreated} />
        </div>
        <div className="product">
          <Product categories={categories} />
        </div>
        <div className="footer">
          <p>Created by Aazain Ullah Khan - 301277063 - COMP 229</p>
        </div>
      </div>
    </>
  );
}

export default App;
