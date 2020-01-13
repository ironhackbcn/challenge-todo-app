import styled  from 'styled-components'

export const Main = styled.div`
background:#e4f9ff
min-height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-content: center;
text-align:center;
margin: -10px;

@import url('https://fonts.googleapis.com/css?family=Solway&display=swap');
@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
h1 {
  font-family: 'Solway', serif;
}
h2 {
  font-family: 'Solway'; 
  font-size: 20px;
}
p {
  font-family: 'Open Sans', sans-serif;
}
`

export const HomeContainer = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align:center;

article {
background: white;
border: solid 1px white;
border-radius: 10px;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;
padding: 50px 25px;
}
`