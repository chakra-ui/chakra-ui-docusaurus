import {
  useCurrentSidebarCategory,
} from '@docusaurus/theme-common';
import { PropSidebarItem } from '@docusaurus/plugin-content-docs';
import isImageExisting from '../utils/is-image-existing';

type SidebarItem = {
  label: string,
  items: {
    label: string,
    href: string,
  }[]
} & PropSidebarItem;

type OverviewComponent = {
  title: string,
  url: string,
  imageUrl: string,
}

const useGetOverviewComponents = () => {
  const sidebar = useCurrentSidebarCategory();

  return sidebar.items.map(({ label: category, items: components }: SidebarItem) => {
    return {
      category,
      components: components.map(({ label, href }): OverviewComponent | null => {
        const hasOverviewImage = isImageExisting(`/components/${label.toLowerCase().replace(' ', '-')}.svg`)


        if (!hasOverviewImage) {
          return null;
        }


        return {
          title: label,
          url: href,
          imageUrl: require(`/components/${label.toLowerCase().replace(' ', '-')}.svg`).default,
        }

      }
        // if the component has no overview image, filter it out
      ).filter(Boolean)
    }
    // if the category has no components, filter it out
  }).filter(({ components }) => components.length > 0);
}

export default useGetOverviewComponents;