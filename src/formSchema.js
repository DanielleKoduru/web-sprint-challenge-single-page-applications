import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .min(2, 'Name must be at least 2 characters long')
        .required('Name is a required field'),
    size: yup.string().required('You must choose a size'),
    instructions: yup.string(),
});

export default formSchema;