import * as Yup from 'yup';

export const ValidateSchema = Yup.object().shape({
  originLink: Yup.string().url('Invalid URL format').required('URL is required'),
});
