import React from 'react';
import StripeCheckOut from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IHz8IJMTbGEge5DxbAWWqTBArl0IuuO3ZS7QdBYhOsQzXARlKN8BHb4GlYmvvQWkXB6R415jevBv7oghdZ6uiq000sCHvPjab';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckOut 
            label='Pay Now'
            name='CRWN Clothing Ltd'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />        
    );
};

export default StripeCheckoutButton;