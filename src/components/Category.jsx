import React, { useState } from 'react';

function Category({ categories, onCategoryCreated }) {
    const [categoryName, setCategoryName] = useState('');
    const [categoryDescription, setCategoryDescription] = useState('');

    const handleCategorySubmit = () => {
        const categoryData = {
            name: categoryName,
            description: categoryDescription,
        };

        // Log category data as JSON and store it somewhere (e.g., in a state variable)
        console.log('New category created', categoryData);

        // Pass the category data to the parent component
        onCategoryCreated(categoryData);

        // Clear input fields after submission
        setCategoryName('');
        setCategoryDescription('');
    }

    return (
        <div>
            <h1>New category creation form</h1>
            <form>
                <div>
                    <label htmlFor="categoryName">Category Name:</label>
                    <input
                        type="text"
                        id="categoryName"
                        value={categoryName}
                        onChange={(e) => setCategoryName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="categoryDescription">Category Description:</label>
                    <input
                        type="text"
                        id="categoryDescription"
                        value={categoryDescription}
                        onChange={(e) => setCategoryDescription(e.target.value)}
                    />
                </div>
                <button type="button" onClick={handleCategorySubmit}>
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Category;
