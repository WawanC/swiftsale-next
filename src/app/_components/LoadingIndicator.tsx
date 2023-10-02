"use client";

import { HashLoader } from "react-spinners";
import { FC } from "react";

type Props = {
  size: number;
};

const LoadingIndicator: FC<Props> = (props) => {
  return <HashLoader color={"black"} size={props.size} />;
};

export default LoadingIndicator;
