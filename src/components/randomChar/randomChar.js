import React, { Component } from "react";
import styled from "styled-components";
import gotService from "../../service/gotService";
import Spinner from "../spinner";
import ErrorPage from "./errorPage";

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
  state = {
    name: null,
    gender: null,
    born: null,
    died: null,
    culture: null,
    loading: true,
    error: false,
  };

  updateCharacter = () => {
    console.log("update");
    const id = Math.floor(Math.random() * 140 + 25);
    // const id = 4467897657685786;
    gotService
      .getCharacter(id)
      .then(({ name, gender, born, died, culture }) =>
        this.setState({
          name,
          gender,
          born,
          died,
          culture,
          loading: false,
        })
      )
      .catch((error) => this.setState({ error: true }));
  };

  componentDidMount() {
    this.updateCharacter();
    this.timerId = setInterval(this.updateCharacter, 2000);
    console.log("did mount");
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
    console.log("will unmount");
  }

  render() {
    const { name, gender, born, died, culture, loading, error } = this.state;
    return (
      <>
        {error ? (
          <ErrorPage />
        ) : loading ? (
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
