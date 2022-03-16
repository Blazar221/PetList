import React from "react"
import styled from "styled-components";

const Wrapper = styled.div`
  background: #FF9999;

  font-family: 'Merriweather Sans', sans-serif;

  display: flex;
  flex-direction: column;

  h1 {
    font-size: 60px;
    margin: 0;
    text-align: center;
    color: white;
  }

  a {
    margin-right: 1px;
    margin-left: auto;
    text-decoration: none;
    color: white;
  }

  padding: 30px;
`

class PetListHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <Wrapper>
            <a href="#/about">About Me</a>
            <h1>Look at these cute pets!</h1>
        </Wrapper>
    }
}

export default PetListHeader;