import * as Yup from 'yup';

export const Formvalidn = Yup.object({
  username: Yup.string()
    .required('Name is required'),

  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),

  phone: Yup.string()
    .matches(/^\d{10}$/, 'Phone number must be exactly 10 digits')
    .required('Phone is required'),

  password: Yup.string()
    .min(6, 'Password must be at least 6 characters long')
    .required('Password is required'),
});
