import React, { useState } from 'react';

function Product({ categories }) {
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productCategory, setProductCategory] = useState('');
    const [productQuantity, setProductQuantity] = useState('');
    const [productPrice, setProductPrice] = useState('');

    const handleProductSubmit = () => {
        const productData = {
            name: productName,
            description: productDescription,
            category: productCategory,
            quantity: productQuantity,
            price: productPrice,
        };

        // Log product data as JSON
        console.log('New product added to inventory', productData);

        // You can store the product data in a state variable or send it to an API, database, etc.

        // Clear input fields after submission
        setProductName('');
        setProductDescription('');
        setProductCategory('');
        setProductQuantity('');
        setProductPrice('');
    };

    return (
        <div>
            <h1>New product creation form</h1>
            <form>
                <div>
                    <label htmlFor="productName">Product Name:</label>
                    <input
                        type="text"
                        id="productName"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="productDescription">Product Description:</label>
                    <input
                        type="text"
                        id="productDescription"
                        value={productDescription}
                        onChange={(e) => setProductDescription(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="productCategory">Category:</label>
                    <select
                        id="productCategory"
                        value={productCategory}
                        onChange={(e) => setProductCategory(e.target.value)}
                    >
                        <option value="">Select a category</option>
                        {categories.map((category, index) => (
                            <option key={index} value={category.name}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="productQuantity">Quantity:</label>
                    <input
                        type="number"
                        id="productQuantity"
                        value={productQuantity}
                        onChange={(e) => setProductQuantity(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="productPrice">Price:</label>
                    <input
                        type="number"
                        inputMode="numeric"
                        id="productPrice"
                        value={productPrice}
                        onChange={(e) => setProductPrice(e.target.value)}
                    />
                </div>
                <button type="button" onClick={handleProductSubmit}>
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Product;
