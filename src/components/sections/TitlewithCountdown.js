import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import Button from "@mui/material/Button/Button";
import Image from '../elements/Image';
import Countdown from '../elements/Countdown';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

class TitlewithCountdown extends React.Component {

  render() {

    const {
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
    } = this.props;

    const outerClasses = classNames(
      'hero section',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'hero-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const splitClasses = classNames(
      'split-wrap',
      invertMobile && 'invert-mobile',
      invertDesktop && 'invert-desktop',
      alignTop && 'align-top'
    );

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            <div className={splitClasses}>
              <div className="split-item">
                <div className="hero-content split-item-content center-content-mobile">
                  <h2 className="mt-0 mb-16 reveal-from-left">
                    9th IEEE/ACM International Conference on Big Data Computing, Applications and Technologies (BDCAT2022)
                  </h2>
                  <p className="mt-0 mb-32 reveal-from-left" data-reveal-delay="200">
                    December 6-9, 2022 - Vancouver, Washington, USA
                  </p>
                  <Countdown date={new Date('12/6/2022')}/>
                  <div className="reveal-from-left" data-reveal-delay="400">
                      <p className="mt-32">Concurrent conference <Button size="large" color="primary" variant="text" href={"https://ucc-conference.org/"}>UCC 2022</Button> </p>
                    {/*<Button tag="a" color="primary" href="https://cruip.com/" wideMobile>*/}
                    {/*  Pricing and plans*/}
                    {/*</Button>*/}
                  </div>
                </div>
                <div className="hero-figure is-3d split-item-image illustration-element-01 reveal-from-right">
                  <Image
                    className="has-shadow"
                    src={require('./../../assets/images/header.JPG')}
                    alt="Hero"
                    width={528}
                    height={396} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

TitlewithCountdown.propTypes = propTypes;
TitlewithCountdown.defaultProps = defaultProps;

export default TitlewithCountdown;
