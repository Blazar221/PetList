import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 40vw;
  height: 40px;
  display: flex;
  justify-content: center;
  
  input {
    margin: 10px 0 2px 0;
    width: 90%;
  }
`

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <Wrapper>
            <input type="text"/>
        </Wrapper>
    }

}

export default SearchBar;