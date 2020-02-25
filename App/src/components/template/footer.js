import React, { Component } from 'react';
import '../../assets/scss/main.scss';
import { Button, Col, Container, Form, Input, InputGroup, InputGroupAddon, Row, Alert } from 'reactstrap';
import Pages from '../../api/Pages';
import Subscription from "../../api/Subscription";


export default class Footer extends Component {

  state = {
    aboutPageUrl: "",
    alert: null
  }

  componentDidMount() {
    this._fetchAboutPage();
  }

  _fetchAboutPage = async () => {
    const pages = await Pages.get(),
          aboutPage = pages.data.filter(p => p.slug === "about")[0].link;

    this.setState({aboutPageUrl: aboutPage});
  }

  _subscribe = async () => {
    try {
      await Subscription.add();
      this.setState({alert: "success"});
      window.scrollTo(0, 0)
      setTimeout(() => this.setState({alert: null}), 5000);

    } catch (e) {
      this.setState({alert: "danger"});
    }
  }

  render() {
    const {aboutPageUrl, alert} = this.state,
          showAlert = alert !== null;

    return (
      <Container className="footer text-center px-0 py-5">
        {showAlert && (
          <Alert color={alert} isOpen={showAlert} className="p-4">
            Thank you for subscribing with human@website.com!
          </Alert>
        )}

        <h2>Join our newsletter</h2>

        <Row className="no-gutters my-4">
          <Col xs="12" sm={{ size: 8, offset: 2}} md={{ size: 4, offset: 4 }}>
            <Form>
              <InputGroup>
                <Input type="email" name="email" placeholder="you@example.com"/>
                <InputGroupAddon addonType="append">
                  <Button color="primary" onClick={this._subscribe}>Subscribe</Button>
                </InputGroupAddon>
              </InputGroup>
            </Form>
          </Col>
        </Row>

        <a href={"/about" || aboutPageUrl}>
          <h6 className="mb-5">Read about our history</h6>
        </a>
      </Container>
    );
  }
}
