import "./ShowDownloadCard.css";
import { memo } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { MdDownload } from "react-icons/md";

function ShowDownloadCard({ show }) {
  return (
    <>
      <div className="border rounded p-4">
        <div className="d-flex align-items-center gap-3">
          <MdDownload size={25} />
          <h5 className="d-inline">Download</h5>
        </div>
        <hr />
        <div className="d-flex flex-column gap-3">
          {show.downloadLinks.map((season) => (
            <Accordion defaultActiveKey={`1`} key={season.id}>
              <Accordion.Item eventKey={`${season.id}`}>
                <Accordion.Header>Season {season.seasonNumber}</Accordion.Header>
                <Accordion.Body>
                  <Row xs={1} sm={2} lg={3} className="px-1">
                    {season.episodes.map((episode) => (
                      <Col className="p-1" key={episode.id}>
                        <Button className="show-download-link" role="link" href={episode.episodeLink}>Episode {episode.episodeNumber}</Button>
                      </Col>
                    ))}
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          ))}
        </div>
      </div>
    </>
  );
}

export default memo(ShowDownloadCard);
