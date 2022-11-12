import MDXComponents from "@theme-original/MDXComponents";

import { FrameworkLinks } from "../../components/framework-link";
import SandpackEditor from "../../components/SandpackEditor/SandpackEditor";
import { PropsTable } from "../../components/props-table/props-table";
import { FeaturesCourses } from "../../components/features-courses";
import { JoinCommunityCards } from "../../components/community-cards";
import { InlineCode } from "../../components/code";
import { ShowcaseGallery } from "../../components/showcase/showcase-gallery";
import { CoreTeam, FormerCoreTeam } from "../../components/members/team";
import { Contributors } from "../../components/members/contributors";
import {
  OrganizationSponsors,
  IndividualSponsors,
} from "../../components/members/sponsors";
import { VideoPlayer } from "../../components/video-player";
import {
  ColorPalette,
  ColorPalettes,
  ColorWrapper,
} from "../../components/color-palette";
import ComponentLinks from "../../components/component-links";
import { ColorBox } from "../../components/color-box";
import ComponentOverview from "../../components/component-overview";

export default {
  ...MDXComponents,
  SandpackEditor: SandpackEditor,
  FrameworkLinks,
  PropsTable,
  FeaturesCourses,
  JoinCommunityCards,
  ShowcaseGallery,
  CoreTeam,
  FormerCoreTeam,
  OrganizationSponsors,
  IndividualSponsors,
  Contributors,
  VideoPlayer,
  ColorPalette,
  ColorPalettes,
  ColorWrapper,
  ComponentLinks,
  ColorBox,
  ComponentOverview,
};
