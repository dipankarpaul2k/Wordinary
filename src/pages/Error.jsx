import React from "react";
import { useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  return (
    <div>
      <div>{error.message}</div>
    </div>
  );
}

export default Error;
