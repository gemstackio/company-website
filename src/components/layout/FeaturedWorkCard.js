import React from 'react';
import Image from '../elements/Image';
import classNames from 'classnames';


const FeaturedWorkCard = ({ subtitle, title, content, imgPath, imageFill }) => {
    console.log(imgPath)
    return (
        <div className="split-item">
            <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                    {subtitle}
                </div>
                <h3 className="mt-0 mb-12">
                    {title}
                </h3>
                <p className="m-0">
                    {content}
                </p>
            </div>
            <div className={
                classNames(
                    'split-item-image center-content-mobile reveal-from-bottom',
                    imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                    src={imgPath}
                    alt="Features split 01"
                    width={528}
                    height={396} />
            </div>
        </div>
    );
};

export default FeaturedWorkCard;