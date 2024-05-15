// src/services/dataService.js
import data from '../stackline_frontend_assessment_data_2021.json';

export const fetchProductData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data[0]);
    }, 1000);
  });
};
