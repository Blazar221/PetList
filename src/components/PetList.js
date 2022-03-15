import React from "react"
import axios from "axios";
import PetCard from "./PetCard";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  
  background: #FF9999;
`

class PetList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            petInfo: []
        }
    }

    componentDidMount() {
        axios.get(`http://eulerity-hackathon.appspot.com/pets`)
            .then(res => {
                this.setState({
                    petInfo: res.data.map(item => {
                        return {title: item["title"], desc: item["description"], url: item["url"]}
                    })
                })
            })
    }

    render() {
        return (
            <Wrapper>
                {this.state.petInfo.map((item, i) => {
                    return <PetCard imageUrl={item.url} title={item.title} desc={item.desc} key={i} type={i%3}/>
                })}
            </Wrapper>
        );
    }

}

export default PetList;