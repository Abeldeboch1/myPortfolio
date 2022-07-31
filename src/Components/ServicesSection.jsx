import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ServiceCard from '../Components/ServiceCard';
// import design from '../img/design.svg';
// import intelligence from '../img/intelligence.svg';
// import gamedev from '../img/game-dev.svg';
import compu from '../img/compu.png';
import code from '../img/code.png';
import responsive from '../img/responsive.png';
function ServicesSection() {
    return (
        <InnerLayout>
            <ServicesSectionStyled>
                <Title title={'Services'} span={'services'} />
                <div className="services">
                    <ServiceCard 
                        image={compu} 
                        title={'Web Development'} 
                        paragraph={'I do some research before starting my development to choose the right way for the job.'}
                    />
                    <div className="mid-card">
                        <ServiceCard 
                            image={responsive} 
                            title={'Responsive Website'} 
                            paragraph={'I design my websites for every screen size available and I make sure it looks great on every device.'}
                        />
                    </div>
                    <ServiceCard 
                        image={code} 
                        title={'Excellent Code'} 
                        paragraph={'Working on projects, I write beautiful and clean code patterns to make them better readable for any teams or clients.'}
                    />
                </div>
            </ServicesSectionStyled>
        </InnerLayout>
    )
}

const ServicesSectionStyled = styled.section`
    .services{
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        @media screen and (max-width:1000px){
            flex-direction: column;
        }
        @media screen and (max-width:950px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
       
    }
`;

export default ServicesSection;
