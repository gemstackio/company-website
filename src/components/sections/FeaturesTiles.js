import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import ServiceIconCard from '../layout/ServiceIconCard'

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Our Services',
    paragraph: 'GemStack is multifaceted technology company with a focus on customer solution architecture, innovation, and development.'
  };

  const services = [
    {
      title: 'Business Technology Architecture',
      description: 'Ex nulla ex cillum Lorem anim ut deserunt commodo culpa proident nostrud laboris enim. Sunt ut magna ad cillum consectetur ad quis in sint sint irure fugiat laboris sit. Qui tempor ut eu ipsum aliqua aliqua elit minim ipsum eiusmod.',
      delay: ''
    },
    {
      title: 'Software Development ',
      description: 'Ex nulla ex cillum Lorem anim ut deserunt commodo culpa proident nostrud laboris enim. Sunt ut magna ad cillum consectetur ad quis in sint sint irure fugiat laboris sit. Qui tempor ut eu ipsum aliqua aliqua elit minim ipsum eiusmod.',
      delay: '200'
    },
    {
      title: 'Mentorship and Career Development',
      description: 'Ex nulla ex cillum Lorem anim ut deserunt commodo culpa proident nostrud laboris enim. Sunt ut magna ad cillum consectetur ad quis in sint sint irure fugiat laboris sit. Qui tempor ut eu ipsum aliqua aliqua elit minim ipsum eiusmod.',
      delay: '400'
    },
    {
      title: 'EdTech',
      description: 'Ex nulla ex cillum Lorem anim ut deserunt commodo culpa proident nostrud laboris enim. Sunt ut magna ad cillum consectetur ad quis in sint sint irure fugiat laboris sit. Qui tempor ut eu ipsum aliqua aliqua elit minim ipsum eiusmod.',
      delay: ''
    },
    {
      title: 'Software Development ',
      description: 'Ex nulla ex cillum Lorem anim ut deserunt commodo culpa proident nostrud laboris enim. Sunt ut magna ad cillum consectetur ad quis in sint sint irure fugiat laboris sit. Qui tempor ut eu ipsum aliqua aliqua elit minim ipsum eiusmod.',
      delay: '200'
    },
    {
      title: 'Mentorship and Career Development',
      description: 'Ex nulla ex cillum Lorem anim ut deserunt commodo culpa proident nostrud laboris enim. Sunt ut magna ad cillum consectetur ad quis in sint sint irure fugiat laboris sit. Qui tempor ut eu ipsum aliqua aliqua elit minim ipsum eiusmod.',
      delay: '400'
    }
  ]

  let listOfServices = services.map((service, i) => <ServiceIconCard {...service} key={i} />)
  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            {listOfServices}


          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;