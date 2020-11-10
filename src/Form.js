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

                <div className="pizza-form-name" />
                <label>
                    Name:&nbsp;
                <input
                        name="name"
                        type="type"
                        onChange={onInputChange}
                        value={values.name}
                    />
                </label>

                <div className="pizza-form-size" />
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

                <div className="pizza-form-toppings" />
                <div>
                    Add Toppings

            <div className="pizza-form-topping1" />
                    <label>
                        Pepperoni:&nbsp;
                    <input
                            name="pepperoni"
                            type="checkbox"
                            onChange={onCheckboxChange}
                            checked={values.toppings.pepperoni}
                        />
                    </label>

                    <div className="pizza-form-topping2" />
                    <label>
                        Sausage:&nbsp;
                    <input
                            name="sausage"
                            type="checkbox"
                            onChange={onCheckboxChange}
                            checked={values.toppings.sausage}
                        />
                    </label>

                    <div className="pizza-form-topping3" />
                    <label>
                        Ham:&nbsp;
                    <input
                            name="ham"
                            type="checkbox"
                            onChange={onCheckboxChange}
                            checked={values.toppings.ham}
                        />
                    </label>

                    <div className="pizza-form-topping4" />
                    <label>
                        Chicken:&nbsp;
                    <input
                            name="chicken"
                            type="checkbox"
                            onChange={onCheckboxChange}
                            checked={values.toppings.chicken}
                        />
                    </label>

                    <div className="pizza-form-topping5" />
                    <label>
                        Tomatoes:&nbsp;
                    <input
                            name="tomatoes"
                            type="checkbox"
                            onChange={onCheckboxChange}
                            checked={values.toppings.tomatoes}
                        />
                    </label>

                    <div className="pizza-form-topping6" />
                    <label>
                        Onions:&nbsp;
                    <input
                            name="onions"
                            type="checkbox"
                            onChange={onCheckboxChange}
                            checked={values.toppings.onions}
                        />
                    </label>

                    <div className="pizza-form-topping7" />
                    <label>
                        Olives:&nbsp;
                    <input
                            name="olives"
                            type="checkbox"
                            onChange={onCheckboxChange}
                            checked={values.toppings.olives}
                        />
                    </label>

                    <div className="pizza-form-topping8" />
                    <label>
                        Green Peppers:&nbsp;
                    <input
                            name="greenPeppers"
                            type="checkbox"
                            onChange={onCheckboxChange}
                            checked={values.toppings.greenPeppers}
                        />
                    </label>

                    <div className="pizza-form-topping9" />
                    <label>
                        Green Chilies:&nbsp;
                    <input
                            name="greenChilies"
                            type="checkbox"
                            onChange={onCheckboxChange}
                            checked={values.toppings.greenChilies}
                        />
                    </label>

                    <div className="pizza-form-topping10" />
                    <label>
                        Pineapple:&nbsp;
                    <input
                            name="pineapple"
                            type="checkbox"
                            onChange={onCheckboxChange}
                            checked={values.toppings.pineapple}
                        />
                    </label>

                    <div className="pizza-form-topping11" />
                    <label>
                        Extra Cheese:&nbsp;
                    <input
                            name="extraCheese"
                            type="checkbox"
                            onChange={onCheckboxChange}
                            checked={values.toppings.extraCheese}
                        />
                    </label>

                    <div className="pizza-form-topping12" />
                    <label>
                        No Cheese:&nbsp;
                    <input
                            name="noCheese"
                            type="checkbox"
                            onChange={onCheckboxChange}
                            checked={values.toppings.noCheese}
                        />
                    </label>

                    <div className="pizza-form-topping13" />
                    <label>
                        Extra Sauce:&nbsp;
                    <input
                            name="extraSauce"
                            type="checkbox"
                            onChange={onCheckboxChange}
                            checked={values.toppings.extraSauce}
                        />
                    </label>

                    <div className="special-instructions" />
                    <label>
                        Special Instructions:&nbsp;
                    <input
                            name="instructions"
                            type="type"
                            onChange={onInputChange}
                            value={values.instructions}
                        />
                    </label>

                    <div className="submit-button" />
                    <button disabled={disabled}>Submit</button>
                    <div className="errors">
                        <div>{errors.name}</div>
                        <div>{errors.size}</div>
                    </div>
                </div>
            </form>
        </div>
    );
};