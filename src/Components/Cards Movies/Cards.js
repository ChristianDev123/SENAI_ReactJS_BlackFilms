import { Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from "reactstrap";

export default function CardMovie(props){
    return(
        <>
            <Card>
                <CardImg
                alt="Card image cap"
                src={props.imageMovie}
                top
                width="100%"
                />
                <CardBody>
                <CardTitle tag="h5">
                    {props.title ?? "Card Title"}
                </CardTitle>
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                >
                    <p>{props.releaseDate}</p>
                </CardSubtitle>
                <CardText className='description_text'>
                  {props.description ?? "No description"}
                </CardText>
                </CardBody>
            </Card>
            <style jsx>{`
                .description_text{
                    height:27vh;
                }
            `}</style>
        </>
    );
}