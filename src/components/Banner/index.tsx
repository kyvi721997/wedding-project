import React from "react";
import {Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import "components/Banner/banner.css";

const Banner: React.FC = () => {
    const responsiveSettings = [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }
    ];
    const images = [
        "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
        "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://khoistudio.vn/wp-content/uploads/2023/09/chup-anh-cuoi-27.jpg",
        "https://tuart.net/wp-content/uploads/2024/02/428630028_7036924786417919_106858848498026614_n.jpg"
    ];

    return (
        <div className={`v-banner`}>
            <Slide cssClass={`v-banner-slides`} autoplay={true} slidesToShow={2} responsive={responsiveSettings}
                   canSwipe={false} arrows={false} duration={2000} infinite={true} pauseOnHover={false}>
                <div className="each-slide-effect">
                    <div className={`v-img-banner`} style={{'backgroundImage': `url(${images[0]})`}}></div>
                </div>
                <div className="each-slide-effect">
                    <div className={`v-img-banner`} style={{'backgroundImage': `url(${images[1]})`}}></div>
                </div>
                <div className="each-slide-effect">
                    <div className={`v-img-banner`} style={{'backgroundImage': `url(${images[2]})`}}></div>
                </div>
                <div className="each-slide-effect">
                    <div className={`v-img-banner`} style={{'backgroundImage': `url(${images[3]})`}}></div>
                </div>
                <div className="each-slide-effect">
                    <div className={`v-img-banner`} style={{'backgroundImage': `url(${images[4]})`}}></div>
                </div>
            </Slide>
            <div className={`v-banner-save-the-date`}>
                <p className={`save-the-date`}>SAVE THE DATE</p>
                <p className={`save-the-date`}>Kỳ Vĩ & Hiếu Thuận</p>
                <p className={`save-the-date`}>xx-10-2024</p>
            </div>
        </div>

    );
}

export default Banner;
