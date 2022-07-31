import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'Resume'} span={'resume'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Working Experience'} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={'2022 - Present'} 
                        title={'React Front End Developer'}
                        subTitle={'ALPHA WORKS TECHNOLOGIES, LLC'}
                        // text={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. '} 
                        text={'It is crucial to implement visual elements that users see and interact within a website for a success of a business. I develop websites that are user-friendly and feature-reach. Also, I am experienced in building web pages that fluidly adjust for optimal browsing depending on the screen size.'}
                    />
                     <ResumeItem 
                        year={'2018 - 2022'} 
                        title={'Commercial Motor Vehicle Driving'}
                        subTitle={'Shuttle Bus'}
                        text={'I was searching for a lively, highly organized as shuttle bus driver to ensure the safe transport of my passengers. To this end, as shuttle bus driver I will be required to determine the collection and drop-off points for each trip, and adhere to the vehicle passenger limit.'} 
                    />
                    <ResumeItem 
                        year={'2013- 2016'} 
                        title={'Education Office'}
                        subTitle={'Ethiopia'}
                        text={'Conducted legal research, analyzed case documents, and data collection to solve educational problems. Frequent conferences with school administrators, principals, and teachers are usually held by the educational officer to assess progress and advise on improvements.'} 
                    /> 
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational Qualifications'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem 
                        year={'2021 - 2022'} 
                        title={'Bitwise Industries'}
                        subTitle={'JavaScript And ReactJS'}
                        text={'I Took Courses In Bitwise Industries such as JavaScript, React JS, React-Redux JS, SASS, Prop-Drilling, Context API, useState, useEffect, useReducer, useRef and so on. When I learnt that programming/coding is one of the basic skills to understand machine learning, I started researching on how to teach myself to code.'} 
                    />
                    <ResumeItem 
                        year={'2021 - 2022'} 
                        title={'Evangadi Tech'}
                        subTitle={'Full-Stack Web Development Certificate'}
                        text={'I learnt Detailed on JavaScript, React Js, Node JS, HTML, CSS, Styled Components, React Hooks  such as Context API, useState, useReducer, useEffect. During my Journey I realized that I should learn/prepare myself for the AI and automation revolution. To stay ahead of the curve, I have been pursuing the coding world myself and convincing family members and so many of my friends to learn the basics of programming.'} 
                    />
                    <ResumeItem 
                        year={'2010 - 2013'} 
                        title={'Addis Ababa university'}
                        subTitle={'Bachelor of Science Degree'}
                        text={'I Graduated Bachelor Degree In Biology And Chemistry from Addis Ababa University Natural Science Faculty. In Addis Ababa University I learnt biolife:- ecosystem, global warming, human development, life styles and in chemistry I learnt biochemistry, quantem chemistry, compounds and electrons.'} 
                    />
                </div>
            </InnerLayout>
        </ResumeStyled>    
    )
}
const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default Resume
