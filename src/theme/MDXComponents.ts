import { FrameworkLinks } from '../components/framework-link';
import MDXComponents from '@theme-original/MDXComponents';
import SandpackEditor from '../components/SandpackEditor/SandpackEditor';
import { PropsTable } from '../components/PropsTable/props-table';
import { FeaturesCourses } from '../components/features-courses';
import { JoinCommunityCards } from '../components/community-cards';
import { InlineCode } from '../components/code';
import { ShowcaseGallery } from '../components/showcase/showcase-gallery';

export default {
  ...MDXComponents,
  SandpackEditor: SandpackEditor,
  FrameworkLinks,
  PropsTable,
  FeaturesCourses,
  JoinCommunityCards,
  code: InlineCode,
  ShowcaseGallery,
};
