import React from "react"
import styled from "styled-components";

const Wrapper = styled.div`
  background: #FF9999;

  h1 {
    font-size: 60px;
    font-family: 'Merriweather Sans', sans-serif;
    margin: 0;
    text-align: center;
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
            <h1>Look at these cute pets!</h1>
        </Wrapper>
    }
}

export default PetListHeader;