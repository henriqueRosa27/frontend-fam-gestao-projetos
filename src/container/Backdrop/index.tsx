import { FC } from "react";
import { useSelector } from "react-redux";

import { getGlobalState } from "../../store/selectors";
import { BackdropComponent } from "../../components";

const BackdropContainer: FC = () => {
  const { loading } = useSelector(getGlobalState);
  return <BackdropComponent open={loading} />;
};

export { BackdropContainer };
