import React, { useState } from 'react';
import { Formik, Field } from 'formik';
import { DisplayFormikState } from '../utilities/helper';
import { searchBusiness } from '../utilities/requests';
import { schema } from '../utilities/schema'
import { prices } from '../assets/data/data'
import styled from 'styled-components'
import { randomGenerator } from '../utilities/utilities';
import Rating from 'react-rating'

const FormStyles = styled.div`

.hidden {
  display:none;
}

`


export default function Form() {
  const [results, setResults] = useState([]);
  const [params, setParams] = useState({});

  const getBusiness = async (params) => {

    const response = await searchBusiness(params);
    console.log(params)
    console.log(response)
    setResults(response.data.search.business)
  }
  //params are the terms, Locations, Price, Open_Now queries we're setting
  //in the response obj we get back the data from the searchBusiness api.

  const handleSubmit = async (evt) => {
    const isValid = await schema.validate(evt);
    if (!isValid) {
      return;
    }
    setParams(evt);
    getBusiness(evt);
  };
  // isValid is in our utils folder and we await to see if the schema is valids if it isn't we dont return anything
  //else we set the params and and get the Business
  // this is what we're sending when we hit submit
  console.log(results)

  // console.log(results[randomGenerator(results.length)]);


  //touched is indicating that a field has been touched aka used


  return (<FormStyles
  >
    <div className=''>
      <Rating initialRating={2} />
      <Formik

        initialValues={{ term: '', location: '', open_now: false }}
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
    </div>
  </FormStyles>)
}
