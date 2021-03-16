import React from 'react';
import Image from '../elements/Image';


const ServiceIconCard = ({ title, description, delay }) => {

    return (
        <div className="tiles-item reveal-from-bottom" data-reveal-delay={delay}>
            <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                    <div className="features-tiles-item-image mb-16">
                        <Image
                            src={require('./../../assets/images/feature-tile-icon-02.svg')}
                            alt="Features tile icon 02"
                            width={64}
                            height={64} />
                    </div>
                </div>
                <div className="features-tiles-item-content">
                    <h4 className="mt-0 mb-8">
                        {title}
                    </h4>
                    <p className="m-0 text-sm">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ServiceIconCard;