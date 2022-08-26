import React from 'react';
import KeyNoteSection from '../components/sections/KeyNoteSection';

const data = [
    {
        title:'IN SITU DATA ANALYTICS FOR NEXT GENERATION MOLECULAR DYNAMICS WORKFLOWS',
        authorName: 'Michela Taufer',
        orgName: 'Tickle College of Engineering, US',
        avatar: 'Michela Taufer.jpg',
        abstract: `Molecular dynamics (MD) simulations study important phenomena in chemistry, materials science, molecular biology, and drug design. They are also one of the most common simulations on petascale and, it is likely they will be equally common on exascale machines as those machines become more widely available. Next-generation supercomputers will have dramatically higher performance than current systems, generating more data that needs to be analyzed (i.e., in terms of number and length of molecular dynamics trajectories). The coordination of data generation and analysis cannot rely on manual, centralized approaches as it does now. 

This talk presents an interdisciplinary approach to tackle the data challenges of MD simulations. 
Through the creation of novel data analytics algorithms for in situ data analysis of relevant
structural molecular properties, the definition of MD-based machine learning (ML) techniques to automatically identify the molecular domains where the properties reside at runtime, and the integration of both algorithms and techniques into MD workflows at the extreme scale, we revolutionize data generation and analysis. By harnessing knowledge from MD simulations in situ, we transform MD workflows on next-generation supercomputers, enabling the workflows to steer MD simulations to more promising areas of the simulation space, identify the data that should be written to disk in underprovisioned parallel file systems, and index data for retrieval and postsimulation analysis.`,
        bio: `Michela Taufer is an ACM Distinguished Scientist and holds the Jack Dongarra Professorship in High Performance Computing in the Department of Electrical Engineering and Computer Science at the University of Tennessee Knoxville (UTK). She earned her undergraduate degrees in Computer Engineering from the University of Padova (Italy) and her doctoral degree in Computer Science from the Swiss Federal Institute of Technology or ETH (Switzerland). From 2003 to 2004 she was a La Jolla Interfaces in Science Training Program (LJIS) Postdoctoral Fellow at the University of California San Diego (UCSD) and The Scripps Research Institute (TSRI), where she worked on interdisciplinary projects in computer systems and computational chemistry.

Michela has a long history of interdisciplinary work with scientists. Her research interests include scientific applications on heterogeneous platforms (i.e., multi-core platforms and accelerators); performance analysis, modeling and optimization; Artificial Intelligence (AI) for cyberinfrastructures (CI); AI integration into scientific workflows, computer simulations, and data analytics. She has been serving as the principal investigator of several NSF collaborative projects. She also has significant experience in mentoring a diverse population of students on interdisciplinary research. Michela's training expertise includes efforts to spread high-performance computing participation in undergraduate education and research as well as efforts to increase the interest and participation of diverse populations in interdisciplinary studies.`
    },
    {
        title:'(Coming Soon)',
        authorName: 'Weisong Shi',
        orgName: 'Wayne State University, US',
        avatar: 'Weisong Shi.jpg',
        abstract: `(Coming Soon)`,
        bio: `(Coming Soon)`
    },

]

class Keynote extends React.Component {
  render() {
    return (
      <React.Fragment>
          {data.map(d=><KeyNoteSection key={d.authorName} invertMobile imageFill className="illustration-section-03" content={d}/>)}
      </React.Fragment>
    );
  }
}

export default Keynote;
