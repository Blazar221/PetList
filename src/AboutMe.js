import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: calc(100vw)-calc(100%);
  padding-left: 5vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  background: #99CCFF;
  
  height: 100vh;
  
  p, h2 {
    color: #FFFFFF
  }
`

class AboutMe extends React.Component {
    render() {
        return (
            <Wrapper>
                <h2>Hello! My name is Ruizhao Yu.</h2>
                <p>
                    I'm a CS student from USC. I love programming, especially web development. My main programming
                    language is python, java and javascript.
                </p>
                <p>
                    I worked as a mobile application engineer intern during summer vacation in 2019. (My main project
                    was a plugin scaffold, which can help other sde work more efficiently). And I also worked as a full
                    stack developer for a research lab in Xian Jiaotong University from November 2020 till July 2021.(At
                    there, I was responsible for a blockchain data platform).
                </p>
                <p>
                    Some of my projects:
                    <br/>
                        Stock Search Platform: <a href="https://arched-broker-340304.wl.r.appspot.com/">https://arched-broker-340304.wl.r.appspot.com/</a>
                    <br/>
                        BvModel: <a href="https://github.com/Blazar221/BvModel">https://github.com/Blazar221/BvModel</a>
                </p>
                <p>
                    I hope you like my work!
                </p>
                <p>
                    Email: ruizhaoy221@gmail.com
                </p>
            </Wrapper>
        );
    }
}

export default AboutMe;