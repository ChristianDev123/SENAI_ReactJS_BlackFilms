import { Col, Container, Row } from "reactstrap";

export default function Footer(){
    return(
        <>
            <Container 
            fluid={true}
            id='footerBox'>
                <Row>
                    <Col>
                        <h3>Contatos</h3>
                        <Container>
                            <ul className='contactsList'>    
                                <li>Github:</li>
                                <li>LinkedIn:</li>
                                <li>Gmail: christian.lima999@gmail.com</li>
                            </ul>
                        </Container>
                    </Col>
                    <Col>
                        <h3>Tecnologias Utilizadas</h3>
                        <Container>
                            <ul>
                                <li>ReactJS</li>
                                <li>Axios</li>
                                <li>BootsTrap (reactstrap)</li>
                            </ul>
                        </Container>
                    </Col>
                </Row>
            </Container>
            <style jsx>{`
                #footerBox{
                    background:var(--colorComponentsHome);
                    color:white;
                    text-align:center;
                }
                #footerBox ul{
                    font-size:20px;
                    text-align:justify;
                }
                #footerBox ul.contactsList{
                    list-style:none;
                }
            `}</style>
        </>
    );
}