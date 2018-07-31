import React from 'react'
import AppAuxii from '../../../hoc/AppAuxi'

const orderSummary = (props) => {
const ingredientSummary = Object
    .keys(props.ingredients)
    .map(igKey => {
        return <li key={igKey}>
            <span
                style={{
                    textTransform: 'capitalize'
                }}>{igKey}</span>: {props.ingredients[igKey]}</li>
    });
    return (
        <AppAuxii>
            <h3>Your Order</h3>
            <p>A delicious burger with the folowing ingredients:
            </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout?</p>
        </AppAuxii>
    );
};

export default orderSummary;