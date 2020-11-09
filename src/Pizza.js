import React from 'react';

export default function Pizza(props) {

    const { name, size, toppings, instructions } = props.pizza;

    let toppingList = Object.keys(toppings);
    let pickedToppings = toppingList.filter(function (picked) {
        return toppings[picked];
    });

    return (
        <div className="pizzaOrder">
            <h2>Your Pizza Order:</h2>
            <h3>Name: {name}</h3>
            <h3>Pizza Size: {size}</h3>
            <ul>
                Pizza Toppings:
          {pickedToppings.map((topping, index) => {
                return <li key={index}>-{topping}</li>;
            })}
            </ul>
            <h3>Instructions (if any): {instructions}</h3>
            <h3>Thank you for your order!</h3>
        </div>
    );
}