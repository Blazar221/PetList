import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 40vw;
  height: 50px;
  display: flex;
  justify-content: center;
  
  margin-bottom: 10px;

  input {
    margin: 6px 0 6px 0;
    width: 90%;
  }
`

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.filterSet = this.filterSet.bind(this)
    }

    filterSet(e) {
        let keyCode = null;
        if (e.which) {
            keyCode = e.which;
        } else if (e.keyCode) {
            keyCode = e.keyCode;
        }
        if (keyCode === 13) {
            this.props.filterSet(e.target.value)
        }
    }

    render() {
        return <Wrapper>
            <input type="text" onKeyPress={this.filterSet}/>
        </Wrapper>
    }

}

export default SearchBar;