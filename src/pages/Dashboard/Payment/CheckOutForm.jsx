import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState, useContext } from 'react';
import { FaCreditCard } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import { AuthContext } from "../../../provider/AuthProvider";

const CheckOutForm = () => {
    const [error, setError] = useState(null);
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            setError("Stripe has not loaded yet.");
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            setError("Card element not found.");
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log("Payment Error", error);
            setError(error.message);
            return;
        }

        console.log("Payment Success", paymentMethod);

  
        const response = await fetch(`https://dine-sphere-server.vercel.app/orders/payment`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: user.email,
                status: "paid"
            })
        });

        if (response.ok) {
           
            Swal.fire({
                title: "Payment Successful",
                text: "Your payment was successful! Please wait a moment while we prepare your food.",
                icon: "success",
                confirmButtonText: "OK",
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/");
                }
            });
        } else {
            setError("Payment status update failed!");
        }
    };

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
            className="max-w-lg mx-auto p-6 sm:p-8 bg-white rounded-xl shadow-2xl border border-gray-300 w-full"
        >
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6 flex items-center justify-center gap-2">
                <FaCreditCard className="text-blue-600" /> Payment Information
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="p-4 border border-gray-300 rounded-xl shadow-inner bg-gray-50 transition hover:bg-gray-100">
                    <CardElement
                        options={{
                            style: {
                                base: {
                                    fontSize: '16px',
                                    color: '#333',
                                    fontFamily: 'Arial, sans-serif',
                                    '::placeholder': { color: '#aab7c4' },
                                },
                                invalid: { color: '#ff6b6b' },
                            },
                        }}
                        className="p-2 sm:p-3 w-full focus:outline-none"
                    />
                </div>
                {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit" 
                    disabled={!stripe} 
                    className="w-full mt-4 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-lg font-semibold rounded-full hover:shadow-lg transition duration-300"
                >
                    Pay Securely
                </motion.button>
            </form>
        </motion.div>
    );
};

export default CheckOutForm;
