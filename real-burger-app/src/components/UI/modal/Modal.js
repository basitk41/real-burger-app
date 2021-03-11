import React, { Component } from "react";
import classes from "./Modal.module.css";
import Aux from "../../../hoc/aux/Aux";
import Backdrop from "../backdrop/Backdrop";

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    );
  }
  render() {
    const { show, children, modalClosed } = this.props;
    return (
      <Aux>
        <Backdrop show={show} clicked={modalClosed} />
        <div
          className={classes.Modal}
          style={{
            transform: show ? "translateY(0vh)" : "translateY(-100vh)",
            opacity: show ? "1" : "0",
          }}
        >
          {children}
        </div>
      </Aux>
    );
  }
}

export default Modal;

// const Modal = ({ show, children, modalClosed }) => {
//   return (
//     <Aux>
//       <Backdrop show={show} clicked={modalClosed} />
//       <div
//         className={classes.Modal}
//         style={{
//           transform: show ? "translateY(0vh)" : "translateY(-100vh)",
//           opacity: show ? "1" : "0",
//         }}
//       >
//         {children}
//       </div>
//     </Aux>
//   );
// };

// export default Modal;
