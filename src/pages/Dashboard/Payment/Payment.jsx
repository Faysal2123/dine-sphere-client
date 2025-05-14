import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckOutForm from './CheckOutForm';

const Payment = () => {
    const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
    return (
        <div>
            <div>
               <Elements stripe={stripePromise}>
                <CheckOutForm></CheckOutForm>
               </Elements>
            </div>
        </div>
    );
};

export default Payment;