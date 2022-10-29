import { AspectRatio } from "@chakra-ui/react";
import ReactPlayer, { ReactPlayerProps } from "react-player";
import { chakra } from "../../design-system/jsx";

export const VideoPlayer = (props: ReactPlayerProps) => (
  <chakra.div mt="3">
    {/*TODO replace with panda */}
    <AspectRatio ratio={16 / 8.84}>
      <ReactPlayer {...props} />
    </AspectRatio>
  </chakra.div>
);
