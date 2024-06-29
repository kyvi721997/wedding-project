import React, {useEffect, useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import 'components/CountDown/countdown.css';
import DateTimeDisplay from "components/DateTimeDisplay";

const getReturnValues = (countDown: number) => {
    // calculate time left
    const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

    return [days, hours, minutes, seconds];
};


const useCountdown = (targetDate: string) => {
    const countDownDate = new Date(targetDate).getTime();

    const [countDown, setCountDown] = useState(
        countDownDate - new Date().getTime()
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setCountDown(countDownDate - new Date().getTime());
        }, 1000);

        return () => clearInterval(interval);
    }, [countDownDate]);

    return getReturnValues(countDown);
};

const CountDown: React.FC = () => {
    const [days, hours, minutes, seconds] = useCountdown("2024/10/01");

    const Rain = () => {
        const hearts: string[] = ["💜", "♥️", "💚️", "💙", "💛"];
        const heartRendering: HTMLDivElement[] = [];

        hearts.forEach(x => {
            const div = document.createElement('div');
            div.innerText = x;
            div.style.right = Math.random() * 100 + "vw";
            div.style.animationDuration = Math.random() * 2 + 4 + "s";
            div.classList.add("heart");
            document.getElementById("heart-falling")?.appendChild(div)
            heartRendering.push(div);
        })

        setTimeout(() => {
            heartRendering.forEach(x => x.remove());
        }, 3000)
    }

    useEffect(() => {
        setInterval(Rain, 1000);
    }, [])

    return <Container fluid className={`countdown`} style={{position: 'relative'}}>

        <Container className={`pt-3`}>
            <Row>
                <Col>
                    <p className={`label`}>Countdown</p>
                </Col>
            </Row>
            <Row className={`mt-3`}>
                <Col>
                    <DateTimeDisplay value={days} type={'Day(s)'}/>
                </Col>
                <Col>
                    <DateTimeDisplay value={hours} type={'Hour(s)'}/>
                </Col>
                <Col>
                    <DateTimeDisplay value={minutes} type={'Minute(s)'}/>
                </Col>
                <Col>
                    <DateTimeDisplay value={seconds} type={'Second(s)'}/>
                </Col>
            </Row>
        </Container>
        <div id={"heart-falling"} style={{position: "absolute", height: '100%'}}></div>
    </Container>
}

export default CountDown;
