import React, { useState } from 'react';
import { Formik, Field } from 'formik';
import { DisplayFormikState } from '../utilities/helper';
import { searchBusiness } from '../utilities/requests';
import { schema } from '../utilities/schema'
import { milesToMeters } from '../utilities/utilities';
import { prices } from '../assets/data/data'

export default function Form() {
  const [results, setResults] = useState([]);
  const [params, setParams] = useState({});

  const getBusiness = async (params) => {
    const response = await searchBusiness(params);
    console.log(response)
    setResults(response.data.search.business)
  }
  const handleSubmit = async (evt) => {
    const isValid = await schema.validate(evt);
    if (!isValid) {
      return;
    }
    console.log(evt);
    setParams(evt);
    getBusiness(evt);
  };

  console.log(results);

  return (<div>
    <Formik
      initialValues={{ term: '', location: '' }}
      validationSchema={schema}
      onSubmit={handleSubmit}

    >
      {(props) => {
        const {
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset,
        } = props;
        return (
          <form onSubmit={handleSubmit}>
            <label htmlFor='term' style={{ display: 'block' }}>
              Term
            </label>
            <input
              id='term'
              placeholder='Enter a term'
              type='text'
              value={values.term}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.term && touched.term
                  ? 'text-input error'
                  : 'text-input'
              }
            />
            {errors.term && touched.term && (
              <div className='input-feedback'>{errors.term}</div>
            )}
            <label htmlFor='location' style={{ display: 'block' }}>
              Location
            </label>
            <input
              id='location'
              placeholder='Enter a location'
              type='text'
              value={values.location}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.location && touched.location
                  ? 'text-input error'
                  : 'text-input'
              }
            />
            <label htmlFor='price' style={{ display: 'block' }}>
              Price
            </label>
            <Field component='select' id='price' name='price' multiple={false} type='text' >
              {prices.map((value, idx) =>
                <option key={idx}>{value}</option>)}
            </Field>

            <label>
              <Field type='checkbox' name='open_now' />
              Open?

            </label>
            {errors.location && touched.location && (
              <div className='input-feedback'>{errors.location}</div>
            )}
            <button
              type='button'
              className='outline'
              onClick={handleReset}
              disabled={!dirty || isSubmitting}
            >
              Reset
            </button>
            <button type='submit' disabled={isSubmitting}>
              Submit
            </button>

            <DisplayFormikState {...props} />
          </form>
        );
      }}
    </Formik>

  </div>)
}
