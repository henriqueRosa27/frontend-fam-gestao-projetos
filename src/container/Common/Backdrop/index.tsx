import { FC } from "react";
import { useSelector } from "react-redux";

import { getGlobalState } from "src/store/selectors";
import { BackdropComponent } from "src/components";

const BackdropContainer: FC = () => {
  const { loading } = useSelector(getGlobalState);
  return <BackdropComponent open={loading} />;
};

export { BackdropContainer };
