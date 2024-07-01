import React from "react";
import "./welcome_page.css";
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

const WelcomePage: React.FC = () => {
    const navigate = useNavigate()

    const onHandlingClick = () => {
        navigate("/home");
    }

    return <div className={`welcome-page`}>
        <img src="https://i.imgur.com/dGOOfnA.png" alt="image-top-right" className="top-right-decoration"/>
        <img src="https://i.imgur.com/t6ffnbn.png" alt="image-top-left" className="top-left-decoration"/>

        <div className="wrap">
            <div className="title">
                <h1>Kỳ Vĩ</h1>
                <h2>&</h2>
                <h1>Hiếu Thuận</h1>

                <h3>Đám cưới của tụi mình 💜</h3>
                <p>Ngày xx-10-2024, tại .... </p>
            </div>
        </div>
        <p className="dance-med">
            we can’t wait to celebrate our special day with you.
        </p>
        <div className={`d-flex justify-content-center`}>
            <Button variant="outline-info" size={"lg"} onClick={onHandlingClick}>
                Tham dự
            </Button>
        </div>
    </div>
}

export default WelcomePage;
