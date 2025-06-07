import "./Fetching.css";

function Loading() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center" style={{height: "calc(100vh - 167px)"}}>
        <span className="loader"></span>
      </div>
    </>
  );
}

export default Loading;
