import React, { Component } from "react";
import { Col, Row, Container } from "reactstrap";
import Header from "../header";
import RandomChar from "../randomChar";
import ItemList from "../itemList";
import CharDetails from "../charDetails";
import styled from "styled-components";

const ShowButton = styled.button`
  width: 100px;
`;
export default class App extends Component {
  state = {
    showRandomChar: false,
    selectedCharacter: 6,
  };

  onCharacterSelected = (id) => {
    console.log(id);
    this.setState({ selectedCharacter: id });
  };

  render() {
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
          <Row>
            <Col md="6">
              <ItemList onCharacterSelected={this.onCharacterSelected} />
            </Col>
            <Col md="6">
              <CharDetails characterId={this.state.selectedCharacter} />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
