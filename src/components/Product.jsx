import React, { useState } from 'react';

function Product({ categories }) {
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productCategory, setProductCategory] = useState('');
    const [productQuantity, setProductQuantity] = useState('');
    const [productPrice, setProductPrice] = useState('');

    const handleProductSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission

        if (
            productName.trim() === '' ||
            productDescription.trim() === '' ||
            productCategory.trim() === '' ||
            productQuantity.trim() === '' ||
            productPrice.trim() === ''
        ) {
            // Check if any of the fields is empty
            alert('Please fill out all fields.');
            return;
        }

        if (productQuantity < 0 || productPrice < 0) {
            // Check if quantity or price is less than 0
            alert('Quantity and price must be non-negative.');
            return;
        }

        const productData = {
            name: productName,
            description: productDescription,
            category: productCategory,
            quantity: productQuantity,
            price: parseFloat(productPrice), // Convert the price to a float
        };

        // Log product data as JSON
        console.log('New product added to inventory', productData);

        // Clear input fields after submission
        setProductName('');
        setProductDescription('');
        setProductCategory('');
        setProductQuantity('');
        setProductPrice('');
    };

    return (
        <div className="container">
            <h1>New product creation form</h1>
            <form onSubmit={handleProductSubmit}>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Product Name"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        required 
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Product Description"
                        value={productDescription}
                        onChange={(e) => setProductDescription(e.target.value)}
                        required 
                    />
                </div>
                <div className="mb-3">
                    <select
                        className="form-select"
                        value={productCategory}
                        onChange={(e) => setProductCategory(e.target.value)}
                        required 
                    >
                        <option value="">Select a Category</option>
                        {categories.map((category, index) => (
                            <option key={index} value={category.name}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-3">
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Quantity"
                        value={productQuantity}
                        onChange={(e) => setProductQuantity(e.target.value)}
                        required 
                        min="0" // Set the minimum value to 0
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="number"
                        inputMode="decimal"
                        step="0.01" 
                        className="form-control"
                        placeholder="Price"
                        value={productPrice}
                        onChange={(e) => setProductPrice(e.target.value)}
                        required 
                        min="0" // Set the minimum value to 0
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Product;
