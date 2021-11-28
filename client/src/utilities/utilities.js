import * as Yup from 'yup';
import HeartIcon from '../components/HeartIcon';

export const randomGenerator = (num) => {
  return Math.floor(Math.random() * num);
}; //randomly generating a number from 0-num


export const generateRating = (n, arr) => {
  for (let i = 0; i < n; i++) {
    arr.push(HeartIcon)
  }
}

// gives you the conversion from miles to meters because yelp only takes meters

// call the number
