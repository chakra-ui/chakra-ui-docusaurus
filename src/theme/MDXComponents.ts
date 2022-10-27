import { FrameworkLinks } from '../components/framework-link';
import MDXComponents from '@theme-original/MDXComponents';
import SandpackEditor from '../components/SandpackEditor/SandpackEditor';
import { FeaturesCourses } from '../components/features-courses';
import { JoinCommunityCards } from '../components/community-cards';

export default {
  ...MDXComponents,
  SandpackEditor: SandpackEditor,
  FrameworkLinks,
  FeaturesCourses,
  JoinCommunityCards,
};
