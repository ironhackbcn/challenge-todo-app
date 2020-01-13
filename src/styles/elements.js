import styled, {css} from 'styled-components'


export const ContainerButtons = styled.div
`
background: transparent;
margin-top:-20px;
padding: 5px 0px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
text-align:center;
a {
  text-decoration: none;
}
`

export const Button = styled.button
`
display: flex;
flex-direction: column;
justify-items: center;
align-items: center;
text-align: center;
background: #69D2E7;
font-size: 16px;
border: solid 1px #69D2E7 ;
border-radius: 3px;
color: white;
margin: 1em 1em;
padding: 0.25em 1em;
a  {
    text-decoration: none;
    color: white;
  }
${props => props.primary && css`
border: none;
background: #0fabbc;
color: white;
`}
${props => props.secondary && css`
border: none;
background: #EF835F;
color: white;
`}`;