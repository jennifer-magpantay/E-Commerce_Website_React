import styled from 'styled-components';

// https://cssgradient.io/ 
// gradient css effect

const MainBanner = styled.div`
width: 100%;
height: 85vh;
position: absolute;
padding: 1%;
background: rgb(96,163,188);
background: linear-gradient(180deg, rgba(96,163,188,1) 3%, rgba(255,255,255,1) 100%);
z-index: -1;
`;
// z-index just works with positioned elements

export default MainBanner;