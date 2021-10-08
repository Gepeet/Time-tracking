import React from 'react'
import styled from 'styled-components';
import jeremyImg from '../Images/image-jeremy.png';
import {mobile} from './Breakpoints';

const Container = styled.div`
    background-color: hsl(235, 46%, 20%);
    display: flex;
    flex-direction: column;
    max-width: 270px;
    min-width: 250px;
    border-radius: 20px;
    margin: 40px 20px;
    ${mobile({
    marginBottom:"0",
    minWidth:"350px",
    maxWidth:"700px"

})}
`

const ProfileContainer = styled.div`
display: flex;
flex-direction:column;
/* align-items: flex-start; */
justify-content: space-between;
background-color: hsl(246, 80%, 60%);
border-radius: 20px;
padding: 30px 20px;

${mobile({
    padding:"30px 30px",
    // backgroundColor:"red",
    flexDirection:"row",
    alignItems:"center"
})}
`
const ImgContainer = styled.div`
width: 80px;
height: 80px;
/* border-radius: 50%; */
background-image: url(${jeremyImg});
background-size: contain;
margin-bottom: 40px;
border:white 2px solid;
border-radius: 50%;

${mobile({
    marginBottom:"0"
})}
`
const Img = styled.img`

`
const ProfileDetailContainer = styled.div`
display: flex;
flex-direction: column;
justify-items: center;
margin-bottom: 37%;

${mobile({
    marginBottom:"0",
    marginLeft:"20px"
})}
`
const Word = styled.span`
/* background-color: aliceblue; */
color:  hsl(235, 45%, 61%);
`
const Name = styled.h1`
/* background-color: aqua; */
color:hsl(236, 100%, 87%);
font-weight: 300;
font-size: 40px;
margin: 0;

${mobile({
    fontSize:"25px"
})}
`
const FilterContainer = styled.div`
display: flex;
flex-direction: column;
margin: 30px 20px;

${mobile({
    margin:"20px 30px",
    alignItems:"center",
    justifyContent:"space-between",
    flexDirection:"row",
})}

`
const Filter = styled.span`
margin: 5px 0;
color: ${props=>props.active} ;
font-size: 16px;

&:hover{
    cursor: pointer;
    color: hsl(236, 100%, 87%);
}

`

const Profile = () => {
    return (
        <Container>
            <ProfileContainer>
                <ImgContainer>
                    <Img></Img>
                </ImgContainer>
                <ProfileDetailContainer>
                    <Word>Report for</Word>
                    <Name>Jeremy Robson</Name>
                </ProfileDetailContainer>
            </ProfileContainer>
            <FilterContainer>
                <Filter active="hsl(235, 45%, 61%)">Daily</Filter>
                <Filter active="hsl(236, 100%, 87%)">Weekly</Filter>
                <Filter active="hsl(235, 45%, 61%)">Monthly</Filter>
            </FilterContainer>
        </Container>
    )
}

export default Profile
