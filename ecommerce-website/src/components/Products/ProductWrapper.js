import styled from 'styled-components';

const ProductWrapper = styled.div`
width: 100%;
height: auto;
display: flex;
flex-wrap: nowrap;
align-items: center;
justify-content: space-between;
border-bottom: 1px solid var(--gray);

@media(max-width: 800px){
    flex-wrap: wrap;
}
`;

export default ProductWrapper;