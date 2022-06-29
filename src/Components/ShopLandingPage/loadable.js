import React from "react";

import Loader from "../Loader/index";
import loadable from "../../Utils/loadable";

//import Lazy Loading from Loader component
export default loadable(() => import("./index"), {
  fallback: <Loader isLoading />,
});
