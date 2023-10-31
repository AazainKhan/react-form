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
      <div class="forms">
        <Category categories={categories} onCategoryCreated={handleCategoryCreated} />
        <Product categories={categories} />
        <div class="footer">
          <p>Created by Aazain Ullah Khan - 301277063 - COMP 229</p>
        </div>
      </div>
    </>
  );
}

export default App;
