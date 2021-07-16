import React, { Component } from "react";
import styled from "styled-components";
import gotService from "../../service/gotService";
import Spinner from "../spinner";

const ItemListBlock = styled.ul`
  li {
    cursor: pointer;
  }
`;

export default class ItemList extends Component {
  state = {
    characterList: null,
  };

  componentDidMount() {
    gotService.getAllCharacters().then((characterList) => {
      this.setState({ characterList });
    });
  }

  renderItems(arr) {
    return arr.map((item, i) => (
      <li
        className="list-group-item"
        key={i}
        onClick={() => this.props.onCharacterSelected(i)}
      >
        {item.name}
      </li>
    ));
  }

  render() {
    const { characterList } = this.state;

    if (!characterList) {
      return <Spinner />;
    }

    const items = this.renderItems(characterList);

    return (
      <ItemListBlock className="item-list list-group">{items}</ItemListBlock>
    );
  }
}
