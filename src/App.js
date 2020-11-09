import React, { useState, useEffect } from "react";
import { Route, Switch, Link, Redirect } from "react-router-dom";
import './App.css';
import Form from './Form';
import Pizza from './Pizza';
import axios from 'axios';
import * as yup from 'yup';
import formSchema from './formSchema';

const initialFormValues = {
  name: '',
  size: '',
  toppings: {
    pepperoni: false,
    sausage: false,
    ham: false,
    chicken: false,
    tomatoes: false,
    onions: false,
    olives: false,
    greenPeppers: false,
    greenChilies: false,
    pineapple: false,
    extraCheese: false,
    noCheese: false,
    extraSauce: false,
  },
  instructions: '',
};

const initialFormErrors = {
  name: '',
  size: '',
}

const initialDisabled = true;

const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);
  const [currentPizza, setCurrentPizza] = useState([]);

  const postPizza = (pizza) => {
    axios
      .post(`https://reqres.in/`, pizza)
      .then((response) => {
        pizza([response.data, ...currentPizza]);
        console.log(response.data)
      })
      .catch((error) => {
        debugger
        console.log(error);
      })
      .finally(() => {
        setFormValues(initialFormValues);
      });
  };

  const onInputChange = (event) => {
    const { name } = event.target;
    const { value } = event.target;

    yup
      .reach(formSchema, name)
      .validate(value)
      .then((valid) => {
        setFormErrors({
          ...formErrors,
          [name]: '',
        });
      })
      .catch((error) => {
        setFormErrors({
          ...formErrors,
          [name]: error.errors,
        });
      });

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const onCheckboxChange = (event) => {
    const { name } = event.target;
    const { checked } = event.target;

    setFormValues({
      ...formValues,
      toppings: {
        ...formValues.toppings,
        [name]: checked,
      },
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const pizza = {
      name: formValues.name.trim(),
      size: formValues.size,
      toppings: formValues.toppings,
      instructions: formValues.instructions.trim(),
    };
    postPizza(pizza);
  };

  useEffect(() => {
    formSchema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);



  return (
    <>
      <nav>
        <h1>Lambda Eats</h1>
        <div className="nav">
          <Link to="/" id="home"> Home </Link>
          <Link to="/Pizza" id="pizzaOrder"> Pizza Order </Link>
          <Link to="/help" id="help"> Help </Link>
        </div>
      </nav>

      <Switch>
        <Route path="/help">
          <h1>Your Favorite Food, Delivered While Coding</h1>
          <p>Pizza?</p>
        </Route>

        <Route path="/Pizza">
          <Form
            onInputChange={onInputChange}
            onSubmit={onSubmit}
            onCheckboxChange={onCheckboxChange}
            disabled={disabled}
            errors={formErrors}
            values={formValues}
          />
          {currentPizza.map((pizza, index) => {
            return <div key={index} >
              <h2>{pizza.name}</h2>
              <p>{pizza.size}</p>
              <p>{pizza.topings}</p>
              <p>{pizza.instructions}</p>
            </div>
          })}
        </Route>
      </Switch>
    </>
  );
};

export default App;
