import React, { Component } from 'react';
import '../../assets/scss/main.scss';
import { Container } from "reactstrap";


export default class Header extends Component {

  render() {
    return (
        <Container className="text-center text-capitalize py-4 px-0">
          <h1 className="text-primary">
            Eats dinner
          </h1>
        </Container>
    );
  }
}
