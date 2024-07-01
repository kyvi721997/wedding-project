import React from "react";
import {Container} from "react-bootstrap";
import {Banner, CountDown, ImagesGallery} from "components";
import Story from "components/Story";
import H5AudioPlayer from "react-h5-audio-player";

const playlist = [
    {src: 'https://vnso-pt-49-tf-a128-z3.zmdcdn.me/42a584f7bfabec81252de0fda666909f?authen=exp=1720013459~acl=/42a584f7bfabec81252de0fda666909f/*~hmac=758fc0058e0579a6e358d3961f578948'},
    {src: 'https://a128-z3.zmdcdn.me/cd5601de7e2a4acf7f0498ef2d10fcde?authen=exp=1719864556~acl=/cd5601de7e2a4acf7f0498ef2d10fcde/*~hmac=abf337155af64a3623966409541f5c75'},
    {src: 'https://vnso-pt-49-tf-a128-z3.zmdcdn.me/ec25f4811ba5ef57e63252ab0280c6d0?authen=exp=1720013476~acl=/ec25f4811ba5ef57e63252ab0280c6d0/*~hmac=ed514872a71d0596d15804f8125ceda1'},
]

const HomePage: React.FC = () => {
    const [currentTrack, setTrackIndex] = React.useState(0)
    const handleClickNext = () => {
        console.log('click next')
        setTrackIndex((currentTrack) =>
            currentTrack < playlist.length - 1 ? currentTrack + 1 : 0
        );
    };

    const handleEnd = () => {
        console.log('end')
        setTrackIndex((currentTrack) =>
            currentTrack < playlist.length - 1 ? currentTrack + 1 : 0
        );
    }
    return <Container fluid={true}>
        <Banner/>
        <CountDown/>
        <div className={`break-line`}>
            <hr/>
        </div>
        <Story/>
        <ImagesGallery/>
        <div>
            <H5AudioPlayer
                autoPlay
                volume={0.5}
                src={playlist[currentTrack].src}
                showSkipControls
                onClickNext={handleClickNext}
                onEnded={handleEnd}
                onError={()=> {console.log('play error')}}
                onPlay={e => console.log("onPlay", e)}
            />
        </div>
    </Container>
}

export default HomePage;
