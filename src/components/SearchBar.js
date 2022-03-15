import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 40vw;
  height: 45px;
  display: flex;
  flex-direction: row;
  justify-content: center;

  border-radius: 20px;
  overflow: hidden;

  margin-bottom: 10px;
  padding: 0;

  input {
    width: 86%;
    border: 0;
    outline: 0;
    font-size: 30px;
  }
`

const Button = styled.button`
  width: 7%;
  border: 0;
  background: url(${props => props.type === "search" ? "./search.svg" : "./close.svg"});
  background-position: center;
  background-repeat: no-repeat;
  background-color: white;
  background-size: 60% 60%;
  &:hover {
    opacity: 0.8;
  }
`

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.enterFilter = this.enterFilter.bind(this)
        this.search = this.search.bind(this)
        this.close = this.close.bind(this)
    }

    enterFilter(e) {
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

    search() {
        let filterVal = document.getElementById("pet-filter").value
        this.props.filterSet(filterVal)
    }

    close() {
        document.getElementById("pet-filter").value = ""
        this.props.filterSet("")
    }


    render() {
        return <Wrapper>
            <Button type="search" onClick={this.search}/>
            <input type="text" id="pet-filter" onKeyPress={this.enterFilter}/>
            <Button type="close" onClick={this.close}/>
        </Wrapper>
    }

}

export default SearchBar;