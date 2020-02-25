import React, { Component } from 'react';
import { Container, Row } from "reactstrap";
import Template from "../template";


export default class About extends Component {
  render() {
    const body = (
      <Container className="about px-0">
        <h2> The History of Eats Dinner </h2>
        <Row noGutters>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ullamcorper nulla sit amet tellus tempor
            tempor. In luctus, lectus sit amet tincidunt varius, tellus urna volutpat purus, nec sollicitudin augue
            nisl in nisi. Ut vel velit vehicula, congue dolor id, condimentum ante. Pellentesque eget cursus tellus,
            non dignissim massa. Integer massa erat, dignissim sed nunc at, accumsan hendrerit est. Donec sem dui,
            imperdiet in luctus sit amet, tristique nec tellus. Vestibulum sit amet velit tincidunt, imperdiet felis
            fringilla, elementum magna. Aenean enim leo, mattis ac arcu id, ornare fringilla lectus. Proin eu felis ut
            leo molestie pretium.</p>

          <p>Vestibulum iaculis massa tellus, nec placerat orci gravida sit amet. Suspendisse molestie quam in bibendum
            viverra. Curabitur pretium quam a interdum volutpat. Donec vitae posuere lacus. Phasellus ac blandit
            libero, vitae aliquam nisi. Proin vel luctus orci, at porta justo. Phasellus nec sapien rutrum, ornare urna
            suscipit, rhoncus diam. Integer condimentum orci vitae neque sagittis cursus. Pellentesque dolor nunc,
            tincidunt ut convallis non, blandit gravida ligula. Mauris mollis tristique sem nec scelerisque.</p>
        </Row>
      </Container>
    )

    return (
      <Template body={body}/>
    );
  }
}