import React, { Component } from "react";
import { Col, Row, Container } from "reactstrap";
import Header from "../header";
import RandomChar from "../randomChar";
import CharacterPage from "../characterPage";
import styled from "styled-components";
import ErrorPage from "../randomChar/errorPage";

const ShowButton = styled.button`
  width: 100px;
`;
export default class App extends Component {
  state = {
    showRandomChar: false,
    error: false,
  };

  render() {
    if (this.state.error) {
      return <ErrorPage />;
    }

    const { showRandomChar } = this.state;
    return (
      <>
        <Container>
          <Header />
        </Container>
        <Container>
          <Row>
            <Col lg={{ size: 5, offset: 0 }}>
              {showRandomChar && <RandomChar />}
              <ShowButton
                onClick={() =>
                  this.setState({ showRandomChar: !showRandomChar })
                }
              >
                {showRandomChar ? "Hide" : "Show"}
              </ShowButton>
            </Col>
          </Row>
          <CharacterPage />
        </Container>
      </>
    );
  }
}
