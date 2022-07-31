import React from 'react';
import Typed from "react-typed";
import styled from 'styled-components';
// import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';
// import YoutubeIcon from '@material-ui/icons/YouTube';
import Particle from '../Components/Particle';
function HomePage() {
    return (
        <HomePageStyled>
            <div className="particle-con">
                <Particle />
            </div>
            <div className="typography">
                <h1>Hi, I'm <span>Abel Reda</span></h1>
                       
                <div className='type'>
                     Welcome to my website <br/>
                   I am  <span>
        <Typed
                        strings={[
        "React Developer",
        "Full Stack Developer",
        "Website Developer",
        "Frontend Developer",
        "Backend Developer",
        "Software Developer",
        "MERN Stack Developer"
          ]}
          typeSpeed={150}
          backSpeed={100}
         loop
         />
        </span>
                </div>
                <div className="icons">
                    <a href="https://github.com/Abeldeboch1?tab=repositories" className="icon i-github">
                        <GithubIcon />
                    </a>
                    <a href="https://www.linkedin.com/in/abel-reda-594bbb140/details/experience/" className="icon i-facebook">
                        <LinkedInIcon />
                    </a>
                    {/* <a href="https://codepen.io/pen/" className="icon i-youtube">
                        <YoutubeIcon />
                    </a> */}
                </div>
            </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;
        h1{
          cursor: pointer;
        }
       .type{
            cursor: pointer;
    font-size:40px;
    color: #98129d;
}
.type{
    &:hover{
        color: #52ed54;
    }
}
        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem;
                }
            }

            .i-youtube{
                &:hover{
                    border: 2px solid red;
                    color: red;
                }
            }
            .i-github{
                &:hover{
                    border: 2px solid #5F4687;
                    color: #5F4687;
                }
            }
        }
    }
`;

export default HomePage;
