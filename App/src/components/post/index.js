import React, { Component } from 'react';
import { Container, Row } from "reactstrap";
//import Posts from "../../api/Posts";
import moment from "moment";
import Template from "../template";


export default class Post extends Component {

  state = {
    loading: true,
    post: {},
    postId: this.props.match.params.id
  }

  componentDidMount() {
    this._fetchPost();
  }

  _fetchPost = async () => {
    try {
      //const posts = await Posts.get();
      // Iterate our posts to get current post id
      const post = {}
      this.setState({
        post: post.data || {},
        loading: false
      });

    } catch (e) {
      console.log(e)
      this.setState({
        post: {},
        loading: false
      });
    }
  }

  _renderDate = date => moment(date).format("LL");

  render() {
    const { post, loading } = this.state;
    const homeBody = loading ? (
      <Container className="post">
        Loading...
      </Container>
    ) : (
      <Container className="post">
        <h2>{post.title.rendered || "Another Post"}</h2>
        <Row className="text-secondary">
          {this._renderDate(post.date|| "")}
        </Row>
        <Row></Row>
      </Container>
    );

    return (
      <Template body={homeBody}/>
    );
  }
}
