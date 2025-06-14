import "./ShowsCard.css";
import Card from 'react-bootstrap/Card';
import Badge from "react-bootstrap/Badge";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { memo } from "react";
import { scrollToTop } from "../../utils/utils";

function ShowsCard({
  name,
  title,
  image,
  summary,
  genres,
  ageRating,
  imdbRating,
  downloadPage
}) {
  return (
    <Card className="shows-card position-relative text-center h-100">
      {/* Image & Badges */}
      <Link to={`${name}`} onClick={scrollToTop}>
        <Badge bg="light" text="dark" className="imdb-rating">{imdbRating}</Badge>
        <Badge bg="light" text="dark" className="age-rating">{ageRating}</Badge>
        <Card.Img variant="top" src={image} loading="lazy" alt={name} />
      </Link>

      {/* Title & Genres & Summary */}
      <Card.Body>
        <Link to={`${name}`} className='text-light' onClick={scrollToTop}>
          <Card.Title>{title}</Card.Title>
        </Link>
        <hr />
        <div className="genres-container">
          {genres.map((genre, index) => (
            <Button
              key={index}
              size="sm"
              className="shows-card-genres"
              value={genre}
            >
              {genre}
            </Button>
          ))}
        </div>
        <hr />
        <Card.Text>{summary}</Card.Text>
      </Card.Body>

      {/* Links */}
      <Card.Footer className="d-flex justify-content-between p-3 mt-1">
        <Link to={`${name}`} onClick={scrollToTop}>
          <Button variant="outline-light" size="sm">More Info</Button>
        </Link>
        <Button variant="outline-light" size="sm" role="link" href={downloadPage} target="_blank">
          Download Page
        </Button>
      </Card.Footer>
    </Card>
  );
}

export default memo(ShowsCard);
