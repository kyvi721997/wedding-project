import {Container} from "react-bootstrap";
import {Banner, CountDown, ImagesGallery} from "src/components";
import 'react-h5-audio-player/lib/styles.css';
import H5AudioPlayer from "react-h5-audio-player";
import Story from "components/Story";

function App() {
    return (
        <Container fluid={true}>
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
                    src="https://a128-z3.zmdcdn.me/cd5601de7e2a4acf7f0498ef2d10fcde?authen=exp=1719864556~acl=/cd5601de7e2a4acf7f0498ef2d10fcde/*~hmac=abf337155af64a3623966409541f5c75"
                    onPlay={e => console.log("onPlay", e)}
                />
            </div>
        </Container>
    )
}

export default App
