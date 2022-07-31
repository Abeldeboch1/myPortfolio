import React from 'react'
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ProgressBar from './ProgressBar';

function Skills() {
    return (
        <SkillsStyled>
            
                <Title title={'My Skills'} span={'my skills'} />
                <InnerLayout>
                    <div className="skills">
                        <ProgressBar 
                            title={'HTML5'}
                            width={'100%'}
                            // text={'100%'}
                        />
                        <ProgressBar 
                            title={'CSS3'}
                            width={'100%'}
                            // text={'100%'}
                    />
                       <ProgressBar 
                            title={'STYLED-COMPONENTS'}
                            width={'100%'}
                            // text={'100%'}
                    />
                       <ProgressBar 
                            title={'SASS'}
                            width={'100%'}
                            // text={'100%'}
                    />
                    <ProgressBar 
                            title={'MATERIAL UI'}
                            width={'100%'}
                            // text={'100%'}
                    />
                        <ProgressBar 
                            title={'JAVASCRIPT'}
                            width={'100%'}
                            // text={'100%'}
                    />
                       <ProgressBar 
                            title={'TYPESCRIPT'}
                            width={'100%'}
                            // text={'100%'}
                        />
                        <ProgressBar 
                            title={'REACT-REDUX JS'}
                            width={'100%'}
                            //  text={'100%'}
                        />
                        <ProgressBar 
                            title={'NODE JS'}
                            width={'100%'}
                            // text={'100%'}
                        />
                        <ProgressBar 
                            title={'REACT JS'}
                            width={'100%'}
                            // text={'100%'}
                        />
                        <ProgressBar 
                            title={'REACT HOOKS'}
                            width={'100%'}
                            // text={'100%'}
                    />
                         <ProgressBar 
                            title={'GITHUH'}
                            width={'100%'}
                            // text={'100%'}
                    />
                    </div>
                </InnerLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default Skills;
