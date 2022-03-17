import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import CardMovie from "../Cards Movies/Cards";

export default function ListingMovies(){
    const [itemsMovies, setItemsMovies] = useState([]);
    useEffect(()=>{
         axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=17d45ec4f4d84e93174a08551c27d75f&sort_by=popularity.desc`)
         .then(({data})=>{
            const array_movie=[]; 
            data.results.map((data)=>{
                const objMovie = {
                    idMovie:data.id,
                    nameMovie:data.original_title,
                    description:data.overview,
                    imageMovie:data.poster_path,
                    releaseDate:data.release_date,
                };
                array_movie.push(objMovie);
            })
            setItemsMovies(array_movie);
        })
    },[]);

    return(
        <>
            <Row
                lg='4'
                md='3'
                sm='2'
            >
                {itemsMovies.map((movieInfo)=>{
                    return(
                        <Col key={movieInfo.idMovie} className='cardsDivision'>
                            <Container>
                                <CardMovie
                                    imageMovie={`http://image.tmdb.org/t/p/original${movieInfo.imageMovie}`}
                                    title={movieInfo.nameMovie}
                                    releaseDate={movieInfo.releaseDate}
                                    description={movieInfo.description}
                                />
                            </Container>
                        </Col>
                    )
                })}
            </Row>
            <style jsx>{`
                .cardsDivision{
                    padding:10px;
                }
            `}</style>
        </>
    );
}