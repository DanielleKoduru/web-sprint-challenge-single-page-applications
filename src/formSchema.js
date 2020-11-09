import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .min(2, 'Name must be at least 2 characters long')
        .required('Name is a required field'),
    size: yup.bool().oneOf([true], 'You must choose a size'),
    topings: yup.object().shape({
        pepperoni: yup.boolean(),
        sausage: yup.boolean(),
        ham: yup.boolean(),
        chicken: yup.boolean(),
        tomatoes: yup.boolean(),
        onions: yup.boolean(),
        olives: yup.boolean(),
        greenPeppers: yup.boolean(),
        greenChilies: yup.boolean(),
        pineapple: yup.boolean(),
        extraCheese: yup.boolean(),
        noCheese: yup.boolean(),
        extraSauce: yup.boolean(),
    }),
    instructions: yup.string(),
});

export default formSchema;