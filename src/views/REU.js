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
import ImportantDate from "../components/sections/ImportantDate";

class Secondary extends React.Component {

    state = {
        demoModalActive: false
    }

    openModal = (e) => {
        e.preventDefault();
        this.setState({demoModalActive: true});
    }

    closeModal = (e) => {
        e.preventDefault();
        this.setState({demoModalActive: false});
    }

    render() {


        return (
            <React.Fragment>

                <GenericSection topDivider>
                    <div className="container">
                        <h2 className="mt-0">REU Symposium</h2>
                        <p>
                            <a href={"https://bigdatareu.umbc.edu/reu-symposium/"} target={"_blank"}>2022 Symposium for
                                Undergraduate Research in Data Science, Systems, and Security (REU Symposium 2022)</a>
                        </p>
                        <h5>One day in December 6-9, 2022, Portland, Oregon, USA</h5>

                        <h4>Description</h4>
                        <p>
                            Undergraduate research plays an important role in attracting our best undergraduates to
                            continue towards graduate education in the science and engineering fields. Publishing
                            research in a professional venue is part of the training for future researchers. The
                            National Science Foundation (NSF) provides support for undergraduate research within the
                            Research Experience for Undergraduates (REU) program. The goal of this Symposium is to
                            provide a venue for students to publish their research done as part of the REU program. The
                            symposium seeks original submissions in research areas that are currently funded by the
                            NSF’s directorate for Computer and Information Science and Engineering (CISE) or other
                            related directorates. Research done by undergraduate researchers via funding from similar
                            programs such as Louis Stokes Alliances for Minority Participation (LSAMP) are also eligible
                            to submit.
                        </p>
                        <p>
                            The same REU Symposium has been held in 2021. More information can be found at <a
                            href={"https://bigdatareu.umbc.edu/reu-symposium/symposium-2021/"} target={"_blank"}>REU
                            Symposium 2021</a>
                        </p>
                        <p>
                            The key requirement for this Symposium is that <strong>the submission’s lead author must be
                            an undergraduate student funded as part of the NSF REU (REU supplement or REU Site) program
                            or similar programs.</strong>
                        </p>
                        <p style={{"color":"red"}}>Update (07/24/2022): The main <a href="https://bdcat-conference.org/"
                                                                              target="_blank"
                                                                              rel="noopener noreferrer">conference</a> has
                            received funding from National Science Foundation (NSF) to provide <strong>Student Travel
                                Awards</strong> for students to attend the main conference and the REU symposium.
                            Details on travel award application instruction will be posted later. </p>
                    </div>
                </GenericSection>
                <ImportantDate topDivider event={[
                    {key: 'Paper submission due date (Extended)', date: '12 September 2022'},
                    {key: 'Decision notification', date: '30 September 2022'},
                    {key: 'Camera-ready due date', date: '15 October 2022'}
                ]}
                               extra={<p>Symposium: One day in Dec 6-9, 2022</p>}/>
                <GenericSection topDivider>
                    <div className="container">
                        <h4 className="mt-0">Paper Submission</h4>
                        <p>Authors are invited to submit full papers (maximal 10 pages) or short papers (maximal 6
                            pages) as per IEEE 8.5 x 11 manuscript guidelines (templates for LaTex, Word and PDF can be
                            found at <a href="https://www.ieee.org/conferences/publishing/templates.html"
                                        target="_blank" rel="noopener"> IEEE Templates for Conference Proceedings</a>).
                            All papers must be submitted via <a
                                href="https://easychair.org/conferences/?conf=reusymposium2022" target="_blank"
                                rel="noopener">the conference submission system for the symposium</a>.</p>
                        <p>At least one author of each accepted paper is required to attend the symposium and present
                            the paper. All the accepted papers by the symposium will be included in the Proceedings of
                            the IEEE/ACM International Conference on Big Data Computing, Applications and Technologies
                            (BDCAT2022) which will be published by IEEE Computer Society.</p>
                    </div>
                </GenericSection>
                <GenericSection topDivider>
                    <div className="container">
                        <h2 className="mt-0">Symposium Organization</h2>
                        <h4>Program Chairs</h4>
                        <ul>
                            <li><a href="https://userpages.umbc.edu/~gobbert/">Dr. Matthias K. Gobbert</a>, University
                                of Maryland, Baltimore County, Organizer of <a href="https://bigdatareu.umbc.edu/">the
                                    NSF REU Site on Online Interdisciplinary Big Data Analytics in Science and
                                    Engineering</a></li>
                            <li><a href="https://bdal.umbc.edu/people/jianwu/">Dr. Jianwu Wang</a>, University of
                                Maryland, Baltimore County, Organizer of <a href="https://bigdatareu.umbc.edu/">the NSF
                                    REU Site on Online Interdisciplinary Big Data Analytics in Science and
                                    Engineering</a></li>
                            <li><a href="https://mpsc.umbc.edu/nroy">Dr. Nirmalya Roy</a>, University of Maryland,
                                Baltimore County, Organizer of <a href="https://mpsc.umbc.edu/nsf-reu-scc">the NSF REU
                                    Site on Smart Computing and Communications</a></li>
                            <li><a href="https://www.cs.stonybrook.edu/~fuswang">Dr. Fusheng Wang</a>, Stony Brook
                                University, Organizer of <a href="https://bmi.stonybrookmedicine.edu/reuaibigdata2021">the
                                    NSF REU on Big Data, AI and Medical Informatics</a></li>
                        </ul>
                        <h4>Program Committee Members (Tentative)</h4>
                        <ul>
                            <li><a href="http://faculty.missouri.edu/calyamp/">Dr. Prasad Calyam</a>, University of
                                Missouri-Columbia, Organizer of <a href="http://reu.rnet.missouri.edu/">the NSF REU Site
                                    on Research in Consumer Networking Technologies</a></li>
                            <li><a
                                href="https://sites.google.com/a/nmt.edu/human-centered-computing-and-security-lab/home">Dr.
                                Jun Zheng</a>, New Mexico Tech University, Organizer of <a
                                href="https://ghasemzadeh.com/reu-2021/">the NSF REU Site on Emerging Issues in
                                Cybersecurity</a></li>
                            <li><a href="http://faculty.salisbury.edu/~ealu/">Dr. Enyue (Annie) Lu</a>, Salisbury
                                University, Organizer of <a href="http://faculty.salisbury.edu/~ealu/REU/REU.html">the
                                    NSF REU Site on Explore Emerging Computing in Science and Engineering (EXERCISE)</a>
                            </li>
                        </ul>
                    </div>
                </GenericSection>
            </React.Fragment>
        );
    }
}

// inline style
const formStyle = {
    maxWidth: '420px',
    margin: '0 auto'
}

export default Secondary;