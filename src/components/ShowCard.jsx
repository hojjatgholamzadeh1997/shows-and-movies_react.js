import "./ShowCard.css";
import Card from 'react-bootstrap/Card';
import Badge from "react-bootstrap/Badge";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function ShowCard({
  id,
  image,
  imdbRating,
  ageRating,
  title,
  description,
  genres,
  downloadLink,
  filterByGenreHandler
}) {
  return (
    <Card className="position-relative text-center h-100">
      {/* Image & Badges */}
      <Link to={`${id}`}>
        <Badge bg="light" text="dark" className="imdb-rating">{imdbRating}</Badge>
        <Badge bg="light" text="dark" className="age-rating">{ageRating}</Badge>
        <Card.Img variant="top" src={image} />
      </Link>

      {/* Title & Genres & Description */}
      <Card.Body>
        <Link to={`${id}`} className='text-light'>
          <Card.Title>{title}</Card.Title>
        </Link>
        <hr />
        <div className="genres-container">
          {genres.map((genre, index) => (
            <Button
              key={index}
              variant="outline-light"
              size="sm"
              className="me-2 mb-2"
              value={genre}
              onClick={(event) => {filterByGenreHandler(event)}}
            >
              {genre}
            </Button>
          ))}
        </div>
        <hr />
        <Card.Text>{description}</Card.Text>
      </Card.Body>

      {/* Links */}
      <Card.Footer className="d-flex justify-content-between p-3 mt-1">
        <Link to={`${id}`}>
          <Button variant="outline-light" size="sm">More Info</Button>
        </Link>
        <Button variant="outline-light" size="sm" role="link" href={downloadLink} target="_blank">
          Download
        </Button>
      </Card.Footer>
    </Card>
  );
}

export default ShowCard;
