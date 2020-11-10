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
      .post(`https://reqres.in/api/users`, pizza)
      .then((response) => {
        setCurrentPizza([response.data, ...currentPizza]);
        console.log(response)
      })
      .catch((error) => {
        debugger
        console.log(error);
      })
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
          <Link to="/Pizza" id="pizzaOrder"> Order </Link>
          <Link to="/help" id="help"> Help </Link>
        </div>
      </nav>
      <h2>Your Favorite Food, Delivered While Coding</h2>

      <Switch>
        <Route path="/help">
          <h1>Hungry? We are here to help!</h1>
        </Route>

        <Route path="/pizza">
          <Form
            onInputChange={onInputChange}
            onSubmit={onSubmit}
            onCheckboxChange={onCheckboxChange}
            disabled={disabled}
            errors={formErrors}
            values={formValues}
          />
          {currentPizza.map((pizza, index) => {
            let toppingList = Object.keys(pizza.toppings);
            let chosenToppings = toppingList.filter(function (picked) {
              return pizza.toppings[picked];
            });
            return <div key={index} >
              <h2>{pizza.name}</h2>
              <p>{pizza.size}</p>
              <p>{chosenToppings}</p>
              <p>{pizza.instructions}</p>
            </div>
          })}
        </Route>
        <Route path="/Pizza">
        </Route>
      </Switch>
    </>
  );
};

export default App;
