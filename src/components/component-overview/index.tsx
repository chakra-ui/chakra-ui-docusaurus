import { chakra } from "@chakra-ui/react";
import { css } from "../../../design-system/css";

import useGetOverviewComponents from "../../hooks/use-get-overview-components";
import ComponentOverviewCard from "./component-overview-card";

const ComponentOverview = () => {
  const components = useGetOverviewComponents();

  return (
    <chakra.div>
      {components.map(({ category, components }) => {
        return (
          <chakra.div key={category}>
            <chakra.h2
              fontSize='xl'
              fontWeight='semibold'
              marginTop='3rem !important'
            >
              {category}
            </chakra.h2>
            <div
              className={css({
                display: "grid",
                gridTemplateColumns: {
                  base: "1",
                  sm: "2",
                  md: "3",
                },
                gap: "4rem",
                mb: "4",
              })}
            >
              {components.map(({ title, url, imageUrl }) => {
                return (
                  <ComponentOverviewCard
                    key={url}
                    title={title}
                    url={url}
                    slug={url}
                    imageUrl={imageUrl}
                  />
                )
              })}
            </div>
          </chakra.div>
        )
      })}
    </chakra.div>
  )
}

export default ComponentOverview;
