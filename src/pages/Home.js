import React, { Component } from 'react';
import logo from './../images/tramitessencillos.png';

// import {HomeContainer} from '../styles/global';
// import SectionButtons from "../components/SectionButtons";



export default class Home extends Component {
    render() {
        return (
        <div>
        {/* // <HomeContainer> */}
        <article>
        <a href="/"><img src={logo} alt="logo" width="200px" align="middle"/></a> 
        <h1>TO DO APPLICATION</h1>
        {/* <SectionButtons />   */}
        </article>       
        {/* // </HomeContainer>  */}
        </div>
        )
    }
}



