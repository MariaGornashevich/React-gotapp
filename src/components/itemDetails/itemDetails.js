import React, { Component } from "react";
import styled from "styled-components";
import gotService from "../../service/gotService";

const CharDetailsBlock = styled.div`
  background-color: #fff;
  padding: 25px 25px 15px 25px;
  margin-bottom: 40px;
  h4 {
    margin-bottom: 20px;
    text-align: center;
  }
`;

const SelectError = styled.span`
  color: #fff;
  text-align: center;
  font-size: 26px;
`;

const Field = ({ character, field, label }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span className="term">{label}</span>
      <span>{character[field]}</span>
    </li>
  );
};

export { Field };
export default class CharDetails extends Component {
  state = {
    character: null,
  };

  componentDidMount() {
    this.updateCharacter();
  }

  componentDidUpdate(prevProps) {
    if (this.props.characterId !== prevProps.characterId) {
      this.updateCharacter();
    }
  }

  updateCharacter() {
    const { characterId } = this.props;

    if (!characterId) {
      return;
    }

    gotService.getCharacter(characterId).then((character) => {
      this.setState({ character });
    });
  }

  render() {
    if (!this.state.character) {
      return <SelectError>Please select a character</SelectError>;
    }

    const { character } = this.state;
    const { name } = character;

    return (
      <CharDetailsBlock className="rounded">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          {React.Children.map(this.props.chilren, (child) => {
         return React.cloneElement(child, {character})
          })} </ul>
      </CharDetailsBlock>
    );
  }
}
