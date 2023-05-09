import React from 'react'
import api from '../config/Api';

const SmoothieService = {
  start: (processID: string) => api.post(`process-definition/key/${processID}/start`, {}),

  getAllFruits: () => {
    return api.get(`/fruitStock`);
  },

  completeStart: (taskID: string) => {
    api.post(`task/${taskID}/complete`, {})
  },

  getValues: (processID: string) => api.get(`/task?processDefinitionKey=${processID}`)
};

export default SmoothieService