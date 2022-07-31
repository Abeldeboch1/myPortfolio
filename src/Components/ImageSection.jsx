import React from 'react'
import styled from 'styled-components';
import avaterme from '../img/avaterme.jpeg';
 import PrimaryButton from './PrimaryButton';
 import res from '../img/res.pdf'
import { Button } from '@material-ui/core';


function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={avaterme} alt=""/>
            </div>
            <div className="right-content">
                <h4>I am <span>Abel Reda</span></h4>
                {/* <p>Website Developer</p> */}
                <p className="paragraph">
                    I am a Web Developer with experience in academic and hands-on technical environments, including developing projects through all phases of the Software Development Life Cycle. I am a Software Engineer who is eager to learn, grow and build something great together. I am skilled in a multi-set of Front-end and Back-end frameworks such as HTML5, CSS3, SAS, Styled-Components, Bootstrap, JavaScript, TypeScript, React.Js, React-Redux.JS, State-Management, Node.js, Rest API, Contex API,  Express.Js, GitHub, and NPM. I am looking for an opportunity that gives me a chance to apply my skills in the industry and grow myself to be part of the solution for today's challenge. 
                </p>
                {/* <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality </p>
                        <p>Languages </p>
                        <p>Location</p>
                        <p>Service</p>
                    </div> 
                     <div className="info">
                        <p>: Lorem Ipsum</p>
                        <p>: 36</p>
                        <p>: Spainsh </p>
                        <p>: Spanish, French, English </p>
                        <p>: London, United Kingdom</p>
                        <p>: Freelance</p>
                    </div>
                </div> */}
               {/* <a href="res"> <PrimaryButton title={'Download Cv'} /></a> */}
               <Button
            variant="primary"
            href={res}
            target="_blank"
            
          >
           <PrimaryButton title={'Download Cv'} />
          
          </Button>
                
            </div>
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 95%;
            object-fit: cover;
            border-radius: 7px;
            border: solid 2px aqua;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;
export default ImageSection;
