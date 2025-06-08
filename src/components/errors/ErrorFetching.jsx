import { memo } from "react";
import { MdError } from "react-icons/md";

function ErrorFetching() {
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center gap-3" style={{height: "calc(100vh - 167px)"}}>
        <MdError size={50} />
        <span className="user-select-none">Failed To Fetch</span>
      </div>
    </>
  );
}

export default memo(ErrorFetching);
