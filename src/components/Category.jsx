import React, { useState } from 'react';

function Category({ categories, onCategoryCreated }) {
    const [categoryName, setCategoryName] = useState('');
    const [categoryDescription, setCategoryDescription] = useState('');

    const handleCategorySubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission

        if (categoryName.trim() === '' || categoryDescription.trim() === '') {
            // Check if any of the fields is empty
            alert('Please fill out all fields.');
            return;
        }

        const categoryData = {
            name: categoryName,
            description: categoryDescription,
        };

        console.log('New category created', categoryData);

        onCategoryCreated(categoryData);

        // Clear input fields after submission
        setCategoryName('');
        setCategoryDescription('');
    }

    return (
        <div className="container">
            <h1>New category creation form</h1>
            <form onSubmit={handleCategorySubmit}>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Category Name"
                        value={categoryName}
                        onChange={(e) => setCategoryName(e.target.value)}
                        required 
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Category Description"
                        value={categoryDescription}
                        onChange={(e) => setCategoryDescription(e.target.value)}
                        required 
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Category;
