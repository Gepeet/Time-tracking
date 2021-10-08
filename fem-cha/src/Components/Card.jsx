import React from 'react'
import styled from 'styled-components';
import {ReactComponent as Icon} from '../Images/icon-ellipsis.svg';
import {mobile} from './Breakpoints';

const Container = styled.div`
background-color: ${props=> props.bg};
border-radius: 20px;
min-width: 250px;
position: relative;
transition: all .5s ease;
margin: 40px 20px;

${mobile({
    minWidth:"350px"
})}

`

const IconContainer = styled.div`
position: absolute;
overflow: hidden;
top: 0;
/* background-color: bisque; */
width: 100%;
height: 100%;
`

const Cardbox = styled.div`
padding: 30px 25px;
background-color: hsl(235, 46%, 20%);
border-radius: 20px;
position: relative;
top: 45px;
transition: all .5s ease;
display: flex;
flex-direction: column;

&:hover{
    cursor: pointer;
    background-color: #252a68;
}
`
const TiContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`
const Title = styled.span`
font-weight: 500;
font-size: 18px;
color: white;
`
const HoursContainer = styled.div`
display: flex;
flex-direction: column;
margin-top: 30px;
transition: all 1s ease;

${mobile({
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    marginTop:"10px"
})}
`
const Hours = styled.h1`
margin-top:0;
margin-bottom: 10px;

font-weight: 300;
font-size: 50px;
color: white;
`
const Last = styled.span`
font-size: 14px;
color: hsl(235, 45%, 61%);
transition: all .5s ease;

${mobile({
    fontSize:"18px"
})}
`

const Card = (props) => {
    return (
        <Container bg = {props.bgcolor}>
            <IconContainer>
                <props.bg style={{
                    position:"absolute",
                    right:"15px",
                    top:"-10px"
                }}/>
            </IconContainer>
            
            <Cardbox>
                <TiContainer>
                    <Title>{props.title}</Title>
                    <Icon/>
                </TiContainer>
                <HoursContainer>
                    <Hours>{props.hours}</Hours>
                    <Last>{props.last}</Last>
                </HoursContainer>
            </Cardbox>
        </Container>
    )
}

export default Card
