import React from 'react';
import classNames from 'classnames';
import { SocialIcon } from 'react-social-icons';

const FooterSocial = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-social',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <SocialIcon
            url="https://www.linkedin.com/company/gemstack"
            network="linkedin"
            bgColor="#6163FF"
            fgColor="#151819"
            style={{ height: 20, width: 20 }}
            target='_blank'
          />
        </li>
        <li>
          <SocialIcon
            url="	https://medium.com/@gemstack"
            network="medium"
            bgColor="#6163FF"
            fgColor="#151819"
            style={{ height: 20, width: 20 }}
            target='_blank'
          />
        </li>
        <li>
          <SocialIcon
            url="	https://github.com/gemstackllc"
            network="github"
            bgColor="#6163FF"
            fgColor="#151819"
            style={{ height: 20, width: 20 }}
            target='_blank'
          />
        </li>
      </ul>
    </div>
  );
}

export default FooterSocial;