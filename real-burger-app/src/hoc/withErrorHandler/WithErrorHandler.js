import React, { Component } from "react";
import Modal from "../../components/UI/modal/Modal";
import Aux from "../aux/Aux";
const WithErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null,
    };
    UNSAFE_componentWillMount() {
      this.reqInterceptors = axios.interceptors.request.use((request) => {
        this.setState({ error: null });
        return request;
      });
      this.resInterceptors = axios.interceptors.response.use(
        (response) => response,
        (error) => {
          this.setState({ error });
        }
      );
    }
    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterceptors);
      axios.interceptors.response.eject(this.resInterceptors);
    }
    errorConfirmedHandler = () => {
      this.setState({ error: null });
    };
    render() {
      return (
        <Aux>
          <Modal
            show={this.state.error}
            modalClosed={this.errorConfirmedHandler}
          >
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      );
    }
  };
};

export default WithErrorHandler;
