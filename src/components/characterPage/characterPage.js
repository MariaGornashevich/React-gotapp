import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import ItemList from "../itemList";
import CharDetails from "../charDetails";
import ErrorPage from "../randomChar/errorPage";

export default class CharacterPage extends Component {
  state = {
    selectedCharacter: 130,
    error: false,
  };

  onCharacterSelected = (id) => {
    this.setState({ selectedCharacter: id });
  };

  componentDidCatch() {
    this.setState({
      error: true,
    });
  }

  render() {
    if (this.state.error) {
      return <ErrorPage />;
    }
    return (
      <Row>
        <Col md="6">
          <ItemList onCharacterSelected={this.onCharacterSelected} />
        </Col>
        <Col md="6">
          <CharDetails characterId={this.state.selectedCharacter} />
        </Col>
      </Row>
    );
  }
}
