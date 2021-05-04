import { FC } from "react";
import { useSelector } from "react-redux";

import { getGlobalState } from "@app/store/selectors";
import { BackdropComponent } from "@app/components";

const BackdropContainer: FC = () => {
  const { loading } = useSelector(getGlobalState);
  return <BackdropComponent open={loading} />;
};

export { BackdropContainer };
