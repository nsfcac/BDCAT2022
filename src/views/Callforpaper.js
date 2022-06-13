import React from 'react';
// import section header
import SectionHeader from '../components/sections/partials/SectionHeader';
// import sections
import HeroFull from '../components/sections/HeroFull';
import Team from '../components/sections/Team';
import Roadmap from '../components/sections/Roadmap';
import Testimonial from '../components/sections/Testimonial';
import GenericSection from '../components/sections/GenericSection';
import Cta from '../components/sections/Cta';
// import some required elements
import Image from '../components/elements/Image';
import Input from '../components/elements/Input';
import ButtonGroup from '../components/elements/ButtonGroup';
import Button from '../components/elements/Button';
import Modal from '../components/elements/Modal';
import Accordion from '../components/elements/Accordion';
import AccordionItem from '../components/elements/AccordionItem';
import classNames from "classnames";
import ImportantDate from "../components/sections/ImportantDate";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container/Container";

class Callforpaper extends React.Component {

    render() {
        const {
            className,
            topOuterDivider,
            bottomOuterDivider,
            topDivider,
            bottomDivider,
            hasBgColor,
            invertColor,
            ...props
        } = this.props;

        const genericSection04Header = {
            title: 'Paper Submission'
        };
        return (
            <React.Fragment>
                <Container fullWidth={'lg'}>

                        <GenericSection>
                                <h2>Call for Full Papers</h2>
                                <p>The IEEE/ACM International Conference on Big Data Computing, Applications and Technologies (BDCAT) is an annual conference series aiming to provide a platform for researchers from both academia and industry to present new discoveries in the broad area of big data computing and applications. Previous events were held in Leicester, UK (BDCAT 2021), online (BDCAT 2020), Auckland, New Zealand (BDCAT 2019), Zurich, Switzerland (BDCAT 2018), Austin, Texas, USA (BDCAT 2017), Shanghai, China (BDCAT 2016), Limassol, Cyprus (BDCAT 2015) and London, UK (BDCAT 2014). BDCAT 2022 will be held in conjunction with the 15th IEEE/ACM International Conference on Utility and Cloud Computing (UCC 2022) in Portland, Oregon, USA.</p>
                                <p>Authors are invited to submit original unpublished manuscripts on a broad range of topics related to big data science, computing paradigms, platforms and applications. More information can be found at the conference’s website: <a href={"https://bdcat-conference.org/"} target={"_blank"}>https://bdcat-conference.org/</a> </p>

                        </GenericSection>
                        <GenericSection topDivider>
                            <h2>Topics of interest include (but not limited to)</h2>
                            <ol>
                                <li>Big Data Science
                                    <ul>
                                        <li>Big Data Analytics</li>
                                        <li>Data Science Models and Approaches</li>
                                        <li>Algorithms for Big Data</li>
                                        <li>Big Data Search and Information Retrieval Techniques</li>
                                        <li>Data Mining and Knowledge Discovery Approaches</li>
                                        <li>Machine Learning Techniques for Big Data</li>
                                        <li>Big Data Acquisition, Integration, Cleaning, and Best Practices</li>
                                        <li>Big Data and Deep Learning</li>
                                    </ul>
                                </li>
                                <li>Big Data Infrastructures and Platforms
                                    <ul>
                                        <li>Scalable Computing Models, Theories, and Algorithms</li>
                                        <li>In-Memory Systems and Platforms for Big Data Analytics</li>
                                        <li>Big Data and High Performance Computing</li>
                                        <li>Cyber-Infrastructure for Big Data</li>
                                        <li>Performance Evaluation Reports for Big Data Systems</li>
                                        <li>Storage Systems (including file systems, NoSQL, and RDBMS)</li>
                                        <li>Resource Management Approaches for Big Data Systems</li>
                                        <li>Data Analytics on Edge Devices</li>
                                    </ul>
                                </li>
                                <li>Big Data Applications
                                    <ul>
                                        <li>Big Data Applications for Internet of Things</li>
                                        <li>Mobile Applications of Big Data</li>
                                        <li>Big Data Applications for Cyber Physical Systems</li>
                                        <li>Healthcare Applications such as Genome Processing and Analytics</li>
                                        <li>Scientific Application Case Studies on Cloud Infrastructure</li>
                                        <li>Big Data in Social Networks</li>
                                        <li>Data Streaming Applications</li>
                                    </ul>
                                </li>
                                <li>Big Data Trends and Challenges
                                    <ul>
                                        <li>Fault Tolerance and Reliability</li>
                                        <li>Scalability of Big Data Systems</li>
                                        <li>Energy-Efficient Algorithms</li>
                                        <li>Big Data Privacy and Security</li>
                                        <li>Big Data Archival and Preservation</li>
                                    </ul>
                                </li>
                                <li>Visualization of Big Data
                                    <ul>
                                        <li>Visual Analytics Algorithms and Foundations</li>
                                        <li>Graph and Context Models for Visualization</li>
                                        <li>Analytics Reasoning and Sense-making on Big Data</li>
                                        <li>Visual Representation and Interaction</li>
                                        <li>Big Data Transformation, and Presentation</li>
                                    </ul>
                                </li>
                            </ol>
                        </GenericSection>
                        <GenericSection topDivider>
                            <h2>Paper Submission</h2>
                            <p>
                                Submitted manuscripts must represent original unpublished research that is not currently under review for any other conference or journal. Manuscripts are submitted in PDF format and may not exceed ten single-spaced double-column pages using 10-point size font on 8.5x11 inch pages, including figures, tables, and references. Please refer to <a href={'https://www.ieee.org/conferences/publishing/templates.html'} target={"_blank"}>https://www.ieee.org/conferences/publishing/templates.html</a> for templates and complete formatting instructions.
                            </p>
                            <p>
                                All manuscripts will be reviewed and judged on correctness, originality, technical strength, rigour in analysis, quality of results, quality of presentation, and interest and relevance to the conference attendees.
                            </p>
                            <p>
                                At least one author of each paper must be registered for the conference in order for the paper to be published in the proceedings. The conference proceedings will be published by the IEEE and made available online via the IEEE Xplore Digital Library and ACM Digital Library.
                            </p>
                            <p>
                                Main track submissions: <a href={'https://easychair.org/conferences/?conf=bdcat2022'} target={"_blank"}>https://easychair.org/conferences/?conf=bdcat2022</a>
                            </p>
                            <p>
                                Workshop/symposium submissions: see respective workshop/symposium information.
                            </p>
                        </GenericSection>
                        <GenericSection topDivider>
                            <h2>Awards</h2>
                            <p>A selection commission chaired by the BDCAT 2022 TPC chairs will select and acknowledge the best paper and best student paper to receive an award during the conference.</p>
                        </GenericSection>

                    <GenericSection>

                        <ImportantDate  topDivider className="gradient-section" style={{paddingTop:0}} topOuterDivider={false}/>
                        <p>Check separate BDCAT calls for workshops, tutorials and other tracks.</p>

                    </GenericSection>

                </Container>
            </React.Fragment>
        );
    }
}

// inline style
const formStyle = {
    maxWidth: '420px',
    margin: '0 auto'
}

export default Callforpaper;
