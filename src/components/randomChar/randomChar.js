import React, { Component } from "react";
import styled from "styled-components";
import gotService from "../../service/gotService";
import Spinner from "../spinner";


const RandomBlock = styled.div`
  background-color: #fff;
  padding: 25px 25px 15px 25px;
  margin-bottom: 40px;
  h4 {
    margin-bottom: 20px;
    text-align: center;
  }
`;

const Term = styled.span`
  font-weight: bold;
`;
export default class RandomChar extends Component {
  constructor() {
    super();
    this.updateCharacter();
  }

  state = {
    name: null,
    gender: null,
    born: null,
    died: null,
    culture: null,
    loading: true,
  };

  updateCharacter() {
    const id = Math.floor(Math.random() * 140 + 25);
    gotService
      .getCharacter(id)
      .then(({ name, gender, born, died, culture }) =>
        this.setState({ name, gender, born, died, culture, loading: false })
      )
      .catch((error) => console.error(error));
  }

  render() {
    const { name, gender, born, died, culture, loading } = this.state;
    return (
      <>
        {loading ? (
          <Spinner />
        ) : (
          <RandomBlock className="rounded">
            <h4>Random Character: {name}</h4>
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex justify-content-between">
                <Term>Gender </Term>
                <span>{gender}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <Term>Born </Term>
                <span>{born}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <Term>Died </Term>
                <span>{died}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <Term>Culture </Term>
                <span>{culture}</span>
              </li>
            </ul>
          </RandomBlock>
        )}
      </>
    );
  }
}
