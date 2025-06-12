import "./ShowCard.css";
import { memo, useState } from "react";
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Carousel from 'react-bootstrap/Carousel';
import { BsPeopleFill } from "react-icons/bs";
import { BiCategory } from "react-icons/bi";

function ShowCard({ show }) {
  const [tabID, setTabID] = useState("#information");

  const changeTabHandler = (event) => {
    setTabID(`#${event.target.title}`)
  };

  return (
    <>
      <Card>
        <Card.Header>
          <Nav variant="tabs" defaultActiveKey="#information" className='d-flex gap-2'>
            <Nav.Item>
              <Nav.Link href="#information" title="information" onClick={(event) => {changeTabHandler(event)}}>Information</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#casts" title="casts" onClick={(event) => {changeTabHandler(event)}}>Casts</Nav.Link>
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
            <div className='d-flex flex-column flex-sm-row flex-md-column flex-lg-row justify-content-sm-center gap-3 gap-sm-5 gap-md-3 gap-lg-5 mb-3 py-3 ps-2'>
              <div className='d-flex align-items-center gap-3'>
                <span className='number-of-seasons'>{show.numberOfSeasons}</span>
                <span>Season(s)</span>
              </div>
              <div className='d-flex align-items-center gap-3'>
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
              <ListGroup.Item className='d-flex flex-column gap-3 pt-4 pb-2 ps-4'>
                <div className='d-flex align-items-center gap-2'>
                  <BiCategory />
                  <span>Genres</span>
                </div>
                <ul className='d-flex flex-column gap-3'>
                  {show.genres.map((genre, index) => <li key={index}>{genre}</li>)}
                </ul>
              </ListGroup.Item>
            </ListGroup>
            <hr />
            <Button className="show-imdb-link" role='link' href={show.imdbPage} target='_blank' size="sm">IMDb Page</Button>
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
                <Carousel.Item key={cast.id}>
                  <img src={cast.image} alt={cast.name} loading="lazy" className="w-100 rounded" />
                  <Carousel.Caption>
                    <h3 className="cast-name">{cast.name}</h3>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </Card.Body>
        )}
      </Card>
    </>
  );
}

export default memo(ShowCard);
