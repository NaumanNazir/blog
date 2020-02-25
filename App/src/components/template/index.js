import React, { Component } from 'react';
import '../../assets/scss/main.scss';
import Header from "../template/header";
import Footer from "../template/footer";
import PropTypes from "prop-types"


export default class Template extends Component {

  static propTypes = {
    body: PropTypes.object,
  }

  render() {
    return (
      <div>
        <Header/>
        {this.props.body}
        <Footer/>
      </div>
    );
  }
}
