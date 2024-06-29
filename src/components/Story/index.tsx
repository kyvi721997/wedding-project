import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import "components/Story/ourstory.css"
import imageFamily from 'assets/IMG_0633.jpg';

const Story: React.FC = () => {
    return (<Container fluid className={`our-story mb-3 mb-lg-5`}>
        <Container className={`pt-3`}>
            <Row>
                <Col>
                    <p className={`label`}>OUR STORY</p>
                </Col>
            </Row>

            <Row style={{textAlign: "left"}}>
                <Col>
                    <img src={imageFamily} width={"100%"} alt={"FAMILY"}/>
                </Col>
                <Col xs={8}>
                    <p>Câu chuyện tình của tụi mình được kết duyên từ một cái tết đầy ý nghĩa năm mà những đứa trẻ đều được ba mẹ háo hức đón chờ, năm con Rồng ha mấy cụ hay bảo là Giáp Thìn.
                        Và chúng mình chưa từng nhìn thấy nhau, à thực ra thì cô dâu chưa thấy mình bao giờ.
                        Và trong một lần mình say (xỉn - Tết nhất mà :D) thì mình đã spam tường nhà cô ấy.
                    </p>
                    <p>
                        Và cũng thật tình cờ từ đấy tụi mình tìm hiểu nhau, người nói, người nghe, người nhắn nhủ, người khuyên bảo.
                    </p>
                    <p>
                        Cũng như trải qua thời gian đủ để hiểu nhau một ít, chấp nhận thói hư tật xấu của nhau,
                        bóc trần nhau trước mọi người thì tụi mình cũng quyết định là phải giải cứu thế giới ^^.
                    </p>
                    <p>
                        Hôm nay, ngày kết duyên của tụi mình cũng là ngày mở ra một hành trình mới, à mình thì hay gọi là "Hành trình gia đình" ấy.
                    </p>
                    <p>
                        Hết ùi đó :D. Bạn dự đám cưới của tụi mình nha.
                        À với cả bên dưới có 1 playlist nhạc để nghe trong lúc "Khám phá" cái nơi này của tụi mình, bạn nghe cùng ha ^^.
                    </p>
                </Col>
            </Row>
        </Container>
    </Container>)
}

export default Story;
