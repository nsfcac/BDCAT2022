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
                <Grid container>
                    <Grid item lg={9}>
                        <GenericSection>
                                <h2>Call for Full Papers</h2>
                                <p>The IEEE/ACM International Conference on Big Data Computing, Applications and Technologies (BDCAT) is an annual conference series aiming to provide a platform for researchers from both academia and industry to present new discoveries in the broad area of big data computing and applications. Previous events were held in London, UK (BDCAT 2014), Limassol, Cyprus (BDCAT 2015), Shanghai, China (BDCAT 2016), Austin, Texas, USA (BDCAT 2017), Zurich, Switzerland (BDCAT 2018), Auckland, New Zealand (BDCAT 2019) and online (BDCAT 2020). BDCAT 2021 will be held in conjunction with the 14th IEEE/ACM International Conference on Utility and Cloud Computing (UCC 2021) in Leicester, UK.</p>
                                <p>Authors are invited to submit original unpublished manuscripts on a broad range of topics related to big data science, computing paradigms, platforms and applications. </p>

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
                                BDCAT submissions continue to use a double column format for review based on the new single-column template to facilitate the new ACM production process.
                            </p>
                            <p>
                                Submitted manuscripts must represent original unpublished research that is not currently under review for any other conference or journal. Manuscripts are submitted in PDF format and may not exceed ten (10) ACM-formatted *double-column* pages, including figures, tables, and references.
                            </p>
                            <p>
                                All manuscripts will be reviewed and judged on correctness, originality, technical strength, rigour in analysis, quality of results, quality of presentation, and interest and relevance to the conference attendees. Your submission is subject to a determination that you are not under any sanctions by ACM.
                            </p>
                            <p>
                                Accepted papers will later be converted into single-column format through the ACM TAPS process and therefore need to use the new templates that are single-column by default. Switch them to double-column for authoring your paper. This is possible in both the Word and the LaTeX templates.
                            </p>
                            <p>
                                LaTeX: \documentclass[sigconf,screen,review]{"{acmart}"}
                            </p>
                            <p>
                                Word: Format - Page - Columns - set to 2
                            </p>
                            <p>
                                At least one author of each paper must be registered for the conference in order for
                                the paper to be published in the proceedings. The conference proceedings will be
                                published by the ACM and made available online via the IEEE Xplore Digital Library
                                and ACM Digital Library.
                            </p>
                            <p>
                                Formatting: <a href={"https://www.acm.org/publications/taps/word-template-workflow"}
                                               target={"_blank"}>https://www.acm.org/publications/taps/word-template-workflow</a>
                            </p>
                            <p>
                                Main track submissions: <a href={"https://easychair.org/conferences/?conf=ucc2021"}
                                                           target={"_blank"}>https://easychair.org/conferences/?conf=ucc2021</a>
                            </p>
                            <p>
                                Workshop submissions: see respective workshop information
                            </p>
                        </GenericSection>
                        <GenericSection topDivider>
                            <h2>Awards and Special Issues</h2>
                            <p>A selection commission chaired by the BDCAT 2021 TPC chairs will select and acknowledge the best paper and best student paper to receive an award during the conference.</p>
                            <p>Authors of highly rated papers from BDCAT 2021 will be invited to submit an extended version to a special issue of a prestigious journal in the area of big data which is currently being defined.</p>
                        </GenericSection>
                    </Grid>
                    <Grid item lg={3}>
                        <GenericSection>
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                <ImportantDate topDivider className="gradient-section"/>
                                <p>Check separate UCC calls for workshops, tutorials and other tracks.</p>
                            </CardContent>
                        </Card>
                        </GenericSection>
                    </Grid>
                </Grid>
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
