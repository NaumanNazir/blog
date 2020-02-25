import React, { Component } from 'react';
import { Container, Card, CardBody, Row, CardSubtitle, UncontrolledCollapse, Button } from "reactstrap";
import Posts from "../../api/Posts";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from "moment";
import DOMPurify from "dompurify";
import Template from "../template";


class Home extends Component {

  state = {
    loading: true,
    posts: [],
    aboutPageUrl: ""
  }

  componentDidMount() {
    this._fetchPosts();
  }

  _fetchPosts = async () => {
    try {
      const posts = await Posts.get();
      this.setState({
        posts: posts.data,
        loading: false
      });

    } catch (e) {
      console.log(e)
      this.setState({
        posts: [],
        loading: false
      });
    }
  }

  _renderDate = date => moment(date).format("LL");

  render() {
    const { posts, loading } = this.state;
    const homeBody = (
      <Container className="posts">
        {loading ? (
          <div>Loading... </div>
        ) : posts.map((post, i) => (
          <Row key={i}>
            <div className="divider"/>
            <Button id={`toggle${i}`} className="posts-accordion mr-2 btn-link p-0">
              <FontAwesomeIcon icon="caret-right"/>
            </Button>
            <h5>{post.title.rendered || "Another Post"}</h5>

            <UncontrolledCollapse toggler={`#toggle${i}`}>
              <Card>
                <CardSubtitle className="my-2 text-secondary">{this._renderDate(post.date || "")}</CardSubtitle>
                <CardBody className="px-0 py-2" >
                  <div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(post.excerpt.rendered) || ""}}/>
                  <a href={post.link} target="_blank" rel="noopener noreferrer">Read More</a>
                </CardBody>
              </Card>
            </UncontrolledCollapse>
            {(i === posts.length - 1) && <div className="divider"/>}
          </Row>
        ))}
      </Container>
    )

    return (
      <Template body={homeBody}/>
    );
  }
}

export default Home;
