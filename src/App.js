import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
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
          [name]: error.errors[0],
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
    <div className="App">
      <nav>
        <h1>Lambda Eats</h1>
        <div className="nav">
          <Link to="/" id="home">Home</Link>
        </div>
      </nav>

      <Route path="/pizza-builder">
        <Form
          onInputChange={onInputChange}
          onSubmit={onSubmit}
          onCheckboxChange={onCheckboxChange}
          disabled={disabled}
          errors={formErrors}
          values={formValues}
        />
        {currentPizza.map((pizza, index) => {
          return <Pizza key={index} pizza={pizza} />;
        })}
      </Route>
    </div>
  );
};

export default App;
