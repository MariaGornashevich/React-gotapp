import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import ItemList from "../itemList";
import ItemDetails, { Field } from "../itemDetails";
import ErrorPage from "../randomChar/errorPage";
import gotService from "../../service/gotService";
import RowBlock from "../rowBlock";


export default class CharacterPage extends Component {
  state = {
    selectedCharacter: 130,
    error: false,
  };

  onItemSelected = (id) => {
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

    const itemList = (
      <ItemList
        onItemSelected={this.onItemSelected}
        getData={gotService.getAllCharacters}
        renderItem={({ name, gender }) => `${name} (${gender})`}
      />
    );

    const characterDetails = (
      <ItemDetails
        characterId={this.state.selectedChar}
      >
        <Field field="gender" label="Gender" />
        <Field field="born" label="Born" />
        <Field field="died" label="Died" />
        <Field field="culture" label="Culture" />
      </ItemDetails>
    );

    return <RowBlock left={itemList} right={characterDetails} />;
  }
}
