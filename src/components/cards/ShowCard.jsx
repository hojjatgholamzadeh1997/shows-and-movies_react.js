import "./ShowCard.css";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import ListGroup from 'react-bootstrap/ListGroup';
import Carousel from 'react-bootstrap/Carousel';
import { BsPeopleFill } from "react-icons/bs";
import { BiCategory } from "react-icons/bi";
import { useState } from "react";

function ShowCard({ show }) {
  const [tabID, setTabID] = useState("#information");

  const changeTabHandler = () => {
    tabID === "#information" ? setTabID("#casts") : setTabID("#information");
  };

  return (
    <>
      <Container>
        <Card className="show-card">
          <Card.Header>
            <Nav variant="tabs" defaultActiveKey="#information" className='d-flex gap-2'>
              <Nav.Item>
                <Nav.Link href="#information" title="information" onClick={changeTabHandler}>Information</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#casts" title="cast" onClick={changeTabHandler}>Casts</Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Header>
          {tabID === "#information" && (
            <Card.Body>
              <Card.Title className='d-flex justify-content-between align-items-center'>
                <span className='show-title'>{show.title}</span>
                <Button className='show-release-years' size="sm">{show.releaseYears}</Button>
              </Card.Title>
              <hr />
              <img src={show.image} alt={show.name} className="w-100 rounded" loading="lazy" />
              <hr />
              <Card.Text className='show-summary'>{show.summary}</Card.Text>
              <hr />
              <div className='d-flex justify-content-between mb-3 py-3 px-2'>
                <div className='d-flex align-items-center gap-2'>
                  <span className='number-of-seasons'>{show.numberOfSeasons}</span>
                  <span>Season(s)</span>
                </div>
                <div className='d-flex align-items-center gap-2'>
                  <span className='number-of-episodes'>{show.numberOfEpisodes}</span>
                  <span>Episode(s)</span>
                </div>
              </div>
              <ListGroup>
                <ListGroup.Item className='d-flex flex-column gap-3 py-3'>
                  <div className='d-flex align-items-center gap-2'>
                    <BsPeopleFill />
                    <span>Creators</span>
                  </div>
                  <div className='d-flex flex-column justify-content-center gap-3 text-center'>
                    {show.creators.map((creator, index) => <span key={index} className='show-creator'>{creator}</span>)}
                  </div>
                </ListGroup.Item>
                <ListGroup.Item className='d-flex flex-column gap-3 pt-3 pb-0'>
                  <div className='d-flex align-items-center gap-2'>
                    <BiCategory />
                    <span>Genres</span>
                  </div>
                  <ul className='d-flex flex-column gap-2'>
                    {show.genres.map((genre, index) => <li key={index}>{genre}</li>)}
                  </ul>
                </ListGroup.Item>
              </ListGroup>
              <hr />
              <div className='d-flex justify-content-between'>
                <Button className="show-download" role='link' href={show.downloadLink} target='_blank' size="sm">Download</Button>
                <Button className="show-download" role='link' href={show.imdbLink} target='_blank' size="sm">IMDb Link</Button>
              </div>
            </Card.Body>
          )}
          {tabID === "#casts" && (
            <Card.Body>
              <Card.Title className='d-flex justify-content-between align-items-center'>
                <span className='show-title'>{show.title}</span>
                <Button className='show-release-years' size="sm">{show.releaseYears}</Button>
              </Card.Title>
              <hr />
              <Carousel data-bs-theme="light">
                {show.casts.map((cast) => (
                  <Carousel.Item>
                    <img src={cast.image} alt={cast.name} loading="lazy" className="w-100 rounded" />
                  </Carousel.Item>
                ))}
              </Carousel>
            </Card.Body>
          )}
        </Card>
      </Container>
    </>
  );
}

export default ShowCard;
