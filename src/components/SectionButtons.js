
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Button } from '../styles/elements'
import { ContainerButtons } from '../styles/elements'

/*---- Section Buttons ----- */
import taskicon from '../images/view.svg';
import createIcon from '../images/add_circle.svg';


export class SectionButtons extends Component {
    render() {
        return (
            <div>
            <ContainerButtons>

            <Link to="/mytasks">
              <Button>
              <img src={ taskicon } alt= "user" width= "50" />
              View All Tasks
             </Button>
            </Link>
            <br />
            <Link to="/mysigns">
              {' '}
              <Button primary>
              <img src={ createIcon } alt= "create-task" width= "50" />
              Create new task
              </Button>
            </Link>
            </ContainerButtons>
            </div>
        )
    }
}

export default SectionButtons
