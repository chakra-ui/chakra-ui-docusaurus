import React, { useMemo } from 'react';
import { useThemeConfig } from '@docusaurus/theme-common';
import {
  useTOCHighlight,
  useFilteredAndTreeifiedTOC,
} from '@docusaurus/theme-common/internal';
import TOCItemTree from '@theme/TOCItems/Tree';
export default function TOCItems({
  toc,
  className = 'table-of-contents table-of-contents__left-border',
  linkClassName = 'table-of-contents__link',
  linkActiveClassName = undefined,
  minHeadingLevel: minHeadingLevelOption,
  maxHeadingLevel: maxHeadingLevelOption,
  ...props
}) {
  const themeConfig = useThemeConfig();
  const minHeadingLevel =
    minHeadingLevelOption ?? themeConfig.tableOfContents.minHeadingLevel;
  const maxHeadingLevel =
    maxHeadingLevelOption ?? themeConfig.tableOfContents.maxHeadingLevel;
  const tocTree = useFilteredAndTreeifiedTOC({
    toc,
    minHeadingLevel,
    maxHeadingLevel,
  });
  const tocHighlightConfig = useMemo(() => {
    if (linkClassName && linkActiveClassName) {
      return {
        linkClassName,
        linkActiveClassName,
        minHeadingLevel,
        maxHeadingLevel,
      };
    }
    return undefined;
  }, [linkClassName, linkActiveClassName, minHeadingLevel, maxHeadingLevel]);
  useTOCHighlight(tocHighlightConfig);
  return (
    <div className='table-of-contents__wrapper'>
      <p className='table-of-contents__header'>On this page</p>
      <TOCItemTree
        toc={tocTree}
        className={className}
        linkClassName={linkClassName}
        {...props}
      />
    </div>
  );
}
