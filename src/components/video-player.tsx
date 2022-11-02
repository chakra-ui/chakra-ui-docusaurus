import ReactPlayer, { ReactPlayerProps } from "react-player";
import { chakra } from "../../design-system/jsx";

export const VideoPlayer = (props: ReactPlayerProps) => (
  <chakra.div mt="3" display="flex" justifyContent="center">
    <ReactPlayer {...props} />
  </chakra.div>
);
