import React from 'react'
import styled from "styled-components";
import CardContainer from './Components/CardContainer';
import Profile from "./Components/Profile";
import {mobile} from "./Components/Breakpoints"

const Container = styled.div`
height: 100%;
width: 100%;
background-color: hsl(226, 43%, 10%);
display: flex;
align-items: center;
justify-content: center;
padding: 50px 0;
/* min-height: 850px; */

${mobile({
    minHeight:"1700px"
})}
`
const Dashboard = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
height: max-content;

${mobile({
    flexDirection:"column",
    alignItems:"center"
})}
`

const App = () => {
    return (
        <Container>
            <Dashboard>
                <Profile/>
                <CardContainer/>  
            </Dashboard>
        </Container>
    )
}

export default App
