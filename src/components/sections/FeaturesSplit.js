import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

class FeaturesSplit extends React.Component {

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
      title: 'Simplify your design process',
      paragraph: 'Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation.'
    };

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            {/*<SectionHeader data={sectionHeader} className="center-content reveal-from-top">*/}
            {/*  <div className="features-split-icon mb-24">*/}
            {/*    <Image*/}
            {/*      src={require('./../../assets/images/features-split-icon.svg')}*/}
            {/*      alt="Features split icon"*/}
            {/*      width={80}*/}
            {/*      height={80} />*/}
            {/*  </div>*/}
            {/*</SectionHeader>*/}
            <div className={splitClasses}>

              <div className="split-item reveal-from-top">
                <div className={"container-lg"} >
                  <h3 className="mt-0 mb-16">
                    BDCAT
                  </h3>
                  <p>
                      The IEEE/ACM International Conference on Big Data Computing, Applications and Technologies (BDCAT) is an annual conference series aiming to provide a platform for researchers from both academia and industry to present new discoveries in the broad area of big data computing and applications.
                  </p>
                  <p>
                      This will be the 8th BDCAT in a successful conference series of community-driven events. Previous events were held in London, UK (BDCAT 2014), Limassol, Cyprus (BDCat 2015), Shanghai, China (BDCAT 2016), Austin, Texas, USA (BDCAT 2017), Zurich, Switzerland (BDCAT 2018), Auckland, New Zealand (BDCAT 2019), Leicester, UK (BDCAT 2020) and Leicester, UK (BDCAT 2021).
                  </p>
                </div>
              </div>

              <div className="split-item reveal-from-top">
                <div className="split-item-content center-content-mobile">
                  <h3 className="mt-0 mb-16">
                    BDCAT 2022
                  </h3>
                  <p className="m-0">
                      BDCAT2022 be hosted at the Washington State University. Portland, Oregon’s largest city, sits on the Columbia and Willamette rivers, in the shadow of snow-capped Mount Hood and will be held in conjunction with the 14th IEEE/ACM International Conference on Utility and Cloud Computing.
                  </p>
                  <p>
                      Both UCC and BDCAT will act with responsibility with public good as always the primary consideration. Authors and participants are encouraged to read the <a href={"https://www.acm.org/code-of-ethics"} target={"_blank"}>ACM Code of Ethics and Professional Conduct</a> and <a href={"https://www.acm.org/about-acm/policy-against-harassment"} target={"_blank"}>ACM Policy Against Harassment</a>.
                  </p>
                </div>
                <div className={
                  classNames(
                    'split-item-image center-content-mobile illustration-element-04',
                    imageFill && 'split-item-image-fill'
                  )}>
                  <Image
                    src={require('./../../assets/images/features-split-image.svg')}
                    alt="Features split 02"
                    width={528}
                    height={396} />
                  <div style={img02Style}>
                    <Image
                      src={require('./../../assets/images/campus-entrance-fall.png')}
                      alt="Features split top 02"
                      width={344}
                      height={212} />
                  </div>
                </div>
              </div>



            </div>
          </div>
        </div>
      </section>
    );
  }
}

const img01Style = {
  position: 'absolute',
  width: '139.77%',
  maxWidth: '139.77%',
  top: '-13.89%',
  left: '-16.47%'
}

const img02Style = {
  position: 'absolute',
  width: '140.91%',
  maxWidth: '140.91%',
  top: '-13.88%',
  left: '-24.43%'
}

const img03Style = {
  position: 'absolute',
  width: '141.48%',
  maxWidth: '141.48%',
  top: '-13.88%',
  left: '-16.47%'
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
