import React, { Component } from "react";
import { Col, Row, Container } from "reactstrap";
import Header from "../header";
import RandomChar from "../randomChar";
import CharacterPage from "../characterPage";
import styled from "styled-components";
import ErrorPage from "../randomChar/errorPage";
import ItemList from "../itemList";
import CharDetails from "../itemDetails";
import gotService from "../../service/gotService";

const ShowButton = styled.button`
  width: 100px;
`;
export default class App extends Component {
  state = {
    showRandomChar: false,
    error: false,
  };

  componentDidCatch() {
    console.log("error");
    this.setState({
      error: true,
    });
  }

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
          <Row>
            <Col md="6">
              <ItemList
                onItemSelected={this.onItemSelected}
                getData={gotService.getAllBooks}
              />
            </Col>
            <Col md="6">
              <CharDetails characterId={this.state.selectedCharacter} />
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <ItemList
                getData={gotService.getAllHouses}
                onItemSelected={this.onItemSelected}
              />
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
