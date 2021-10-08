import React from 'react'
import styled from 'styled-components';
import Card from './Card';
import {ReactComponent as workbg} from '../Images/icon-work.svg'
import {ReactComponent as playbg} from '../Images/icon-play.svg'
import {ReactComponent as studybg} from '../Images/icon-study.svg'
import {ReactComponent as exercisebg} from '../Images/icon-exercise.svg'
import {ReactComponent as socialbg} from '../Images/icon-social.svg'
import {ReactComponent as selfcarebg} from '../Images/icon-self-care.svg'
import {mobile} from "./Breakpoints";

const Container = styled.div`
display: flex;
max-width: 900px;
flex-wrap: wrap;
align-items: center;

${mobile({
    flexWrap:"no-wrap",
    flexDirection:"column"
})}
`

const CardContainer = () => {
    return (
        <Container>
            <Card 
                title = "Work"
                hours = "32hrs"
                last = "Last week - 32hrs"
                bgcolor = "hsl(15, 100%, 70%)"
                bg = {workbg}
            />
            <Card 
                title = "Play"
                hours = "10hrs"
                last = "Last week - 8hrs"
                bgcolor = "hsl(195, 74%, 62%)"
                bg = {playbg}
            />
            <Card 
                title = "Study"
                hours = "4hrs"
                last = "Last week - 7hrs"
                bgcolor = "hsl(348, 100%, 68%)"
                bg = {studybg}
            />
            <Card 
                title = "Exercise"
                hours = "4hrs"
                last = "Last week - 5hrs"
                bgcolor = "hsl(145, 58%, 55%)"
                bg = {exercisebg}
            />
            <Card 
                title = "Social"
                hours = "5hrs"
                last = "Last week - 10hrs"
                bgcolor = "hsl(264, 64%, 52%)"
                bg = {socialbg}
            />
            <Card 
                title = "Self Care"
                hours = "2hrs"
                last = "Last week - 2hrs"
                bgcolor = "hsl(43, 84%, 65%)"
                bg = {selfcarebg}
            />
            
        </Container>
    )
}

export default CardContainer
