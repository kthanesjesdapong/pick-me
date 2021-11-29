import * as Yup from 'yup';

export const schema = Yup.object({
    term: Yup.string().required('Term is required'),
    location: Yup.string().required('Location is required.')
})