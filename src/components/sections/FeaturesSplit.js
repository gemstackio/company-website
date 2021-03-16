import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import FeaturedWorkCard from '../layout/FeaturedWorkCard'
import img01 from '../../assets/images/features-split-image-01.png'
import img02 from '../../assets/images/features-split-image-02.png'
import img03 from '../../assets/images/features-split-image-03.png'

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Solutions that work',
    paragraph: 'This section should showcase completed projects. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.'
  };


  const featuredWorkContent = [
    {
      subtitle: 'Lightning fast workflow',
      title: 'Data-driven insights',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      imgPath: 'https://drive.google.com/thumbnail?id=10PswKy4tKWCBR5hidjD_li98vVZ-lRgP'
    },
    {
      subtitle: 'Lightning fast workflow',
      title: 'Data-driven insights',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      imgPath: 'https://drive.google.com/thumbnail?id=1vPANfqAW2D1xE1JbQrW0TeqpcuQO8gZT'
    },
    {
      subtitle: 'Lightning fast workflow',
      title: 'Data-driven insights',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      imgPath: 'https://drive.google.com/thumbnail?id=1ERbgdEwl0Qbi1Fv7je2iAaJZR1Mu6noI'
    }
  ]

  const listOfWork = featuredWorkContent.map((work, i) => {
    console.log(work.imgPath)
    return <FeaturedWorkCard imageFill={imageFill} {...work} key={i} />
  }
  )

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            {listOfWork}

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;