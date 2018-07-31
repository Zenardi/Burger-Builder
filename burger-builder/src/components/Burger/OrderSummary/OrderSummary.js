import React from 'react'
import AppAuxii from '../../../hoc/AppAuxi'
import Button from '../../UI/Button/Button'

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
            <p><strong>Total Price: {props.price}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType='Danger' clicked={props.purchaseCanceled}>CANCEL</Button>
            <Button btnType= 'Success' clicked={props.purchaseContinue}>CONTINUE</Button>

        </AppAuxii>
    );
};

export default orderSummary;