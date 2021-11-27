import * as Yup from 'yup';

export const randomGenerator = (num) => {
  return Math.floor(Math.random() * num);
}; //randomly generating a number from 0-num


export const milesToMeters = n => {
  return n * 1609.34;
}
// gives you the conversion from miles to meters because yelp only takes meters

// call the number
