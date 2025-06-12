import "./ShowDetailsCard.css";
import { memo } from "react";
import { CgDetailsMore } from "react-icons/cg";

function ShowDetailsCard({ show }) {
  return (
    <>
      <div className="border rounded p-4">
        {/* Title */}
        <div className="d-flex align-items-center gap-3">
          <CgDetailsMore size={25} />
          <h5 className="d-inline">Details</h5>
        </div>
        <hr />
        {/* Release Date */}
        <div className="d-flex flex-column flex-lg-row gap-3 gap-lg-4 text-center my-3">
          <span className="py-2">Release Date</span>
          <span className="border py-2 px-3 rounded">{show.releaseDate}</span>
        </div>
        <hr />
        {/* Country of Origin */}
        <div className="d-flex flex-column flex-lg-row gap-3 gap-lg-4 text-center my-3">
          <span className="py-2">Country of Origin</span>
          <div className="d-flex flex-column flex-lg-row flex-wrap gap-3">
            {show.countriesOfOrigin.map((countryOfOrigin, index) => (
              <span key={index} className="border py-2 px-3 rounded">{countryOfOrigin}</span>
            ))}
          </div>
        </div>
        <hr />
        {/* Languages */}
        <div className="d-flex flex-column flex-lg-row gap-3 gap-lg-4 text-center my-3">
          <span className="py-2">Languages</span>
          <div className="d-flex flex-column flex-lg-row flex-wrap gap-3">
            {show.languages.map((language, index) => (
              <span key={index} className="border py-2 px-3 rounded">{language}</span>
            ))}
          </div>
        </div>
        <hr />
        {/* Number of Seasons */}
        <div className="d-flex justify-content-center justify-content-lg-start gap-4">
          <span className="py-2">Number of Seasons</span>
          <span className="border py-2 px-3 rounded">{show.numberOfSeasons}</span>
        </div>
        <hr />
        {/* Number of Episodes */}
        <div className="d-flex justify-content-center justify-content-lg-start gap-4">
          <span className="py-2">Number of Episodes</span>
          <span className="border py-2 px-3 rounded">{show.numberOfEpisodes}</span>
        </div>
        <hr />
      </div>
    </>
  );
}

export default memo(ShowDetailsCard);
