import React, { useState } from 'react';
import { Formik, Field } from 'formik';
import { searchBusiness } from '../utilities/requests';
import { schema } from '../utilities/schema'
import { prices } from '../assets/data/data'
import styled from 'styled-components'
import RestaurantTitle from './RestaurantTitle';
import { randomGenerator } from '../utilities/utilities';


const FormStyles = styled.div`

.hidden {
  display:none;
}

.container{
  display: flex;
  justify-content: center;
  align-self: center;
} 


 .form__container {
  width:50%;
  margin-bottom: 2rem;


}
label {
    font-size: 1.5rem;
  }
input {
  width: 93%;
    font-size: 1rem;
    padding: 1rem;
    margin-bottom: .5rem;
    color: var(--light-pink);
    background-color: var(--semi-pink);
    outline: none;
    border: none;
    border-radius: 8px;
    margin-top: 1rem;
  }

  .input-feedback {
    color: var(--gray-1);
  }

  .open__container {
    display:flex;
    input {
      width: 3%;
      justify-content: end;
    }
  }

  .button__container {
    display:flex;
    justify-content: flex-end;
  }

  select {
    border-radius: 10px solid black;
  }

  .restaurant__container {
    width: 50%;
    margin: 10px;
  }

  .price__container {
    display: flex;
    flex-direction: column;
    width: 50%;

  }
  #price {
    width: 100%;
  }
  .buttons__container{
    float:right;
  }
  
  #check {
    width: auto;
  
  }

  .open__checkbox{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .price__open{
    display: flex;
    justify-content: space-between;
  }

  .restaurant__container {
    margin: auto;
    width: 50%;
    padding: 10px;
    border: 2px solid black;
    display:flex;
    justify-content: center;
  }
  
  .restaurant__wrapper{
   
  }
`


export default function Form() {
  const [results, setResults] = useState([]);
  const [params, setParams] = useState({});

  const getBusiness = async (params) => {

    const response = await searchBusiness(params);
    // console.log(params)
    // console.log(response)
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

  const restaurant = results[randomGenerator(results.length)];



  //touched is indicating that a field has been touched aka used


  return (<FormStyles
  >
    <div className='container'>
      <div className='form__container'>
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

                />
                <div className='price__open'>
                  <div className='price__container'>
                    <label htmlFor='price' >
                      Price
                    </label>

                    <Field component='select' id='price' name='price' multiple={false} type='text' >
                      {prices.map((value, idx) =>
                        <option key={idx}>{value}</option>)}
                    </Field>
                  </div>

                  <div className='open__checkbox'>
                    <label className='open__container'>
                      Open
                    </label>
                    <Field type='checkbox' name='open_now' id='check' />
                  </div>
                </div>
                <div className='buttons__container'>

                  <button
                    type='button'
                    className=''
                    onClick={handleReset}
                    disabled={!dirty || isSubmitting}
                  >
                    Reset
                  </button>
                  <button type='submit' disabled={isSubmitting}>
                    Submit
                  </button>
                </div>

                {errors.location && touched.location && (
                  <div className='input-feedback'>{errors.location}</div>
                )}


              </form>
            );
          }}
        </Formik>

      </div>


    </div>
    <div className='restaurant__container'>
      <div className='restaurant__wrapper'>
        {restaurant && (<RestaurantTitle
          name={restaurant.name}
          rating={restaurant.rating}
          address={restaurant.location.address1}
          city={restaurant.location.city}
          state={restaurant.location.state} />)}

      </div>
    </div>
  </FormStyles>)
}
