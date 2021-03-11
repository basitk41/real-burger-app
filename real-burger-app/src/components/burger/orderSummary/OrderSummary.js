import React from "react";
import Aux from "../../../hoc/aux/Aux";
import Button from "../../UI/button/Button";

const OrderSummary = ({
  ingredients,
  purchaseCanceled,
  purchaseContinued,
  totalPrice,
}) => {
  const ingredientSummary = ingredients.reduce((obj, current) => {
    if (!obj[current.item]) {
      obj[current.item] = 1;
    } else {
      obj[current.item]++;
    }
    return obj;
  }, {});
  //console.log("Order Summary Called");
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        <li>
          Meat: {ingredientSummary["meat"] ? ingredientSummary["meat"] : 0}
        </li>
        <li>
          Cheese:{" "}
          {ingredientSummary["cheese"] ? ingredientSummary["cheese"] : 0}
        </li>
        <li>
          Bacon: {ingredientSummary["bacon"] ? ingredientSummary["bacon"] : 0}
        </li>
        <li>
          Salad: {ingredientSummary["salad"] ? ingredientSummary["salad"] : 0}
        </li>
      </ul>
      <p>
        <strong>Total Price: {totalPrice.toFixed(2)}</strong>
      </p>
      <p>Continue to checkout?</p>
      <Button clicked={purchaseCanceled} btnType="Danger">
        CANCEL
      </Button>
      <Button clicked={purchaseContinued} btnType="Success">
        CONTINUE
      </Button>
    </Aux>
  );
};

export default OrderSummary;

// class OrderSummary extends Component {
//   componentDidUpdate() {
//     console.log("OrderSummary Called");
//   }
//   render() {
//     const {
//       ingredients,
//       purchaseCanceled,
//       purchaseContinued,
//       totalPrice,
//     } = this.props;
//     const ingredientSummary = ingredients.reduce((obj, current) => {
//       if (!obj[current.item]) {
//         obj[current.item] = 1;
//       } else {
//         obj[current.item]++;
//       }
//       return obj;
//     }, {});
//     return (
//       <Aux>
//         <h3>Your Order</h3>
//         <p>A delicious burger with the following ingredients:</p>
//         <ul>
//           <li>
//             Meat: {ingredientSummary["meat"] ? ingredientSummary["meat"] : 0}
//           </li>
//           <li>
//             Cheese:{" "}
//             {ingredientSummary["cheese"] ? ingredientSummary["cheese"] : 0}
//           </li>
//           <li>
//             Bacon: {ingredientSummary["bacon"] ? ingredientSummary["bacon"] : 0}
//           </li>
//           <li>
//             Salad: {ingredientSummary["salad"] ? ingredientSummary["salad"] : 0}
//           </li>
//         </ul>
//         <p>
//           <strong>Total Price: {totalPrice.toFixed(2)}</strong>
//         </p>
//         <p>Continue to checkout?</p>
//         <Button clicked={purchaseCanceled} btnType="Danger">
//           CANCEL
//         </Button>
//         <Button clicked={purchaseContinued} btnType="Success">
//           CONTINUE
//         </Button>
//       </Aux>
//     );
//   }
// }

// export default OrderSummary;
