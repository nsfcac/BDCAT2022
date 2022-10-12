import React from 'react';
import GenericSection from "../components/sections/GenericSection";
import HeroFull from "../components/sections/HeroFull";
import Image from "../components/elements/Image";
import Button from "../components/elements/Button";
import ButtonGroup from "../components/elements/ButtonGroup";
import ImportantDate from "../components/sections/ImportantDate";


class Keynote extends React.Component {
    render() {
        return (
            <React.Fragment>
                <HeroFull content={{title: 'Student Travel Award',
                  inside:<><p>UCC/BDCAT 2022 offers a limited number of travel awards to student participants. All interested students are encouraged to apply, but priority will be given to student (co)authors of an accepted work to the main conference, workshop, or symposium. </p>
                      <p>The student travel award will cover full conference registration (including publication fees) and five nights of stay at the conference hotel (shared room with another student).</p>
                    <div>
                        <Image src={require(`./../assets/images/NSF_4-Color_bitmap_Logo.png`)}
                               width={100}
                               height={100}/>
                    </div>
                  </>
                }}/>
            </React.Fragment>
        );
    }
}

export default Keynote;
