import React, { useState } from 'react';

const PetCalorieCounter: React.FC = () => {
    const [selectedPet, setSelectedPet] = useState('');

    const handleSelectChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
        setSelectedPet(event.target.value);
    };

    return (
        <div>
            <h1>Pet Calorie Counter</h1>
            <label htmlFor="pet-select">Select a pet:</label>
            <select id="pet-select" value={selectedPet} onChange={handleSelectChange}>
                <option value="">-- Please select --</option>
                <option value="cat">Cat</option>
                <option value="dog">Dog</option>
                <option value="rabbit">Rabbit</option>
            </select>
            <p>Selected pet: {selectedPet}</p>
        </div>
    );
};

export default PetCalorieCounter;
