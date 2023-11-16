import React, { useState } from 'react';

const sendEmailEngine = (formData) => {
  // Convert form data into a string
  const formDataString = `
    Name: ${formData.name}
    Email: ${formData.email}
    Phone: ${formData.phone || 'Not provided'}
    Message: ${formData.message}
  `;

  const requestData = {
    to: 'ariveras5656@gmail.com',
    subject: 'Test Subject',
    text: formDataString,
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    message: formData.message,
  };

  return fetch('https://perfect-buckle-lion.cyclic.app/send-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
      // Handle success, e.g., show a success message to the user
    })
    .catch((error) => {
      console.error('Error:', error);
      // Handle error, e.g., show an error message to the user
    });
};

export default sendEmailEngine;
