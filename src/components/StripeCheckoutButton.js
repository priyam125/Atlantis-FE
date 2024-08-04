import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {

    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51KM8ccSIKYG5lvwk8Zm8LADswCIKOenePtFL3wS4pCSSrtfLm2rJQvUxif46M8KdXGZwXziQMvBElXZ6wLj3MF0k00VrRF0vMd'

    const onToken = (token) => {
        console.log(token);
        alert('Payment Succesfull')
    }

  return <StripeCheckout className='mt-6' 
            label='Pay Now'
            name='Front-End Pvt Ltd.'
            billingAddress
            shippingAddress
            image=''
            description={`Your totol is ${price}`}
            currency='INR'
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}/>;
};

export default StripeCheckoutButton;
