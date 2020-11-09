import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .min(6, 'Name must be at least three characters long')
        .required('Name is a required field'),
    size: yup.bool().oneOf([true], 'You must choose a size'),
    termsOfService: yup.bool().oneOf([true], 'You must accept the Terms of Service'),
});

export default formSchema;