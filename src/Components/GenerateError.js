import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

function GenerateError({ err }) {
  if (err.response.data.error) {
    toast.error(err.response.data.error, {
      position: 'bottom-right',
    });
  } else {
    toast.error('User already registered!', {
      position: 'bottom-right',
    });
  }

  return <div>GenerateError</div>;
}

export default GenerateError;
