import React from 'react';
import { IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io'
import { DiGithubBadge } from 'react-icons/di'
import { MdEmail } from 'react-icons/md'
import { FaYoutube } from 'react-icons/fa'

import IconFooterItem from '../../../src/components/Footer/IconFooterItem';
import NigeriaFlag from "../../../static/img/flags/nigeria.svg";
import styles from "./styles.module.css";

type FooterItem = {
  icon: JSX.Element;
  href: string;
}

const footerItems: FooterItem[] = [
  {
    icon: <DiGithubBadge />,
    href: 'https://github.com/segunadebayo'
  },
  {
    icon: <IoLogoTwitter />,
    href: 'https://twitter.com/thesegunadebayo'
  },
  {
    icon: <IoLogoLinkedin />,
    href: 'https://www.linkedin.com/in/thesegunadebayo/'
  },
  {
    icon: <MdEmail />,
    href: 'mailto:sage@adebayosegun.com',
  },
  {
    icon: <FaYoutube />,
    href: 'https://www.youtube.com/channel/UC4TmDovH46TB4S0SM0Y4CIg'
  },
]

function Footer() {
  return (
    <footer
      className={styles.footer}
    >
      <div className={styles.footer__container}>
        <div className={styles.footer__credits}>
          Proudly made in
          <NigeriaFlag className={styles.footer__flag} />
          by Segun Adebayo
        </div>
        <div className={styles.footer__links}>
          {footerItems.map(({ href, icon }) => (
            <IconFooterItem
              key={href}
              href={href}
              target="_blank"
            >
              {icon}
            </IconFooterItem>
          ))}
        </div>
        <div className={styles.footer__vercel_credit}>
          Deployed by {" "}
          <span role='img' aria-label='Vercel logo'>
            ▲
          </span>{' '}
          Vercel
        </div>
      </div>
    </footer>
  );
}
export default React.memo(Footer);
