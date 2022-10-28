import MDXComponents from '@theme-original/MDXComponents';

import { FrameworkLinks } from '../components/framework-link';
import SandpackEditor from '../components/SandpackEditor/SandpackEditor';
import { PropsTable } from '../components/PropsTable/props-table';
import { FeaturesCourses } from '../components/features-courses';
import { JoinCommunityCards } from '../components/community-cards';
import { InlineCode } from '../components/code';
import { ShowcaseGallery } from '../components/showcase/showcase-gallery';
import { CoreTeam, FormerCoreTeam } from '../components/members/team';
import { Contributors } from '../components/members/contributors';
import {
  OrganizationSponsors,
  IndividualSponsors,
} from '../components/members/sponsors';

export default {
  ...MDXComponents,
  SandpackEditor: SandpackEditor,
  FrameworkLinks,
  PropsTable,
  FeaturesCourses,
  JoinCommunityCards,
  code: InlineCode,
  ShowcaseGallery,
  CoreTeam,
  FormerCoreTeam,
  OrganizationSponsors,
  IndividualSponsors,
  Contributors,
};
