import React from 'react'
import api from '../config/Api';

const SmoothieService = {
  addFruit: (fruit: String) => {
    return api.post('/fruit', fruit).then((res) => {
      return res.data;
    });
  },

  getAllFruits: () => {
    return api.get(`/fruitStock`);
  },
};

export default SmoothieService