import React from 'react';
import './App.css';

export default function Form(props) {
    const {
        values,
        onInputChange,
        onSubmit,
        disabled,
        errors,
        onCheckboxChange,
    } = props;


    return (
        <div className="Form">
            <h2>Build Your Pizza</h2>
            <div className="pizza-form" />
            <form onSubmit={onSubmit}>
                <h3>Customize Your Pizza</h3>

                <label>
                    Name:&nbsp;
                <input
                        name="name"
                        type="type"
                        onChange={onInputChange}
                        value={values.name}
                    />
                </label>

                <label>
                    Choose Size:&nbsp;
                <select name="size" value={values.size} onChange={onInputChange}>
                        <option value="">Select a Size</option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                        <option value="extra-large">Extra Large</option>
                    </select>
                </label>

                <div>
                    Add Toppings
                <label>
                        Pepperoni:&nbsp;
                    <input
                            name="pepperoni"
                            type="checkbox"
                            onChange={onCheckboxChange}
                            checked={values.toppings.pepperoni}
                        />
                    </label>

                    <label>
                        Sausage:&nbsp;
                    <input
                            name="sausage"
                            type="checkbox"
                            onChange={onCheckboxChange}
                            checked={values.toppings.sausage}
                        />
                    </label>

                    <label>
                        Ham:&nbsp;
                    <input
                            name="ham"
                            type="checkbox"
                            onChange={onCheckboxChange}
                            checked={values.toppings.ham}
                        />
                    </label>

                    <label>
                        Chicken:&nbsp;
                    <input
                            name="chicken"
                            type="checkbox"
                            onChange={onCheckboxChange}
                            checked={values.toppings.chicken}
                        />
                    </label>

                    <label>
                        Tomatoes:&nbsp;
                    <input
                            name="tomatoes"
                            type="checkbox"
                            onChange={onCheckboxChange}
                            checked={values.toppings.tomatoes}
                        />
                    </label>

                    <label>
                        Onions:&nbsp;
                    <input
                            name="onions"
                            type="checkbox"
                            onChange={onCheckboxChange}
                            checked={values.toppings.onions}
                        />
                    </label>

                    <label>
                        Olives:&nbsp;
                    <input
                            name="olives"
                            type="checkbox"
                            onChange={onCheckboxChange}
                            checked={values.toppings.olives}
                        />
                    </label>

                    <label>
                        Green Peppers:&nbsp;
                    <input
                            name="greenPeppers"
                            type="checkbox"
                            onChange={onCheckboxChange}
                            checked={values.toppings.greenPeppers}
                        />
                    </label>

                    <label>
                        Green Chilies:&nbsp;
                    <input
                            name="greenChilies"
                            type="checkbox"
                            onChange={onCheckboxChange}
                            checked={values.toppings.greenChilies}
                        />
                    </label>

                    <label>
                        Pineapple:&nbsp;
                    <input
                            name="pineapple"
                            type="checkbox"
                            onChange={onCheckboxChange}
                            checked={values.toppings.pineapple}
                        />
                    </label>

                    <label>
                        Extra Cheese:&nbsp;
                    <input
                            name="extraCheese"
                            type="checkbox"
                            onChange={onCheckboxChange}
                            checked={values.toppings.extraCheese}
                        />
                    </label>

                    <label>
                        No Cheese:&nbsp;
                    <input
                            name="noCheese"
                            type="checkbox"
                            onChange={onCheckboxChange}
                            checked={values.toppings.noCheese}
                        />
                    </label>

                    <label>
                        Extra Sauce:&nbsp;
                    <input
                            name="extraSauce"
                            type="checkbox"
                            onChange={onCheckboxChange}
                            checked={values.toppings.extraSauce}
                        />
                    </label>

                    <label>
                        Instructions:&nbsp;
                    <input
                            name="Instructions"
                            type="type"
                            onChange={onInputChange}
                            value={values.instructions}
                        />
                    </label>
                </div>
            </form>
        </div>
    );
};