
import * as Yup from 'yup'; 
  export const formvalidn = Yup.object({
        name: Yup.string().required('Name is required'),
        email: Yup.string()
          .email('Invalid email address')
          .required('Email is required'),
        message: Yup.string()
          .min(6, 'Password must be at least 6 characters long')
          .required('Password is required'),
          
      });




