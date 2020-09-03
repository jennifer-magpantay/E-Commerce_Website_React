import styled from 'styled-components';

const SubLinkContainer = styled.div`
    width: 100%;
    background-color: var(--dk-gray);
    color: var(--lg-gray);
    padding: 16px;
    
    & h5 {
        padding: 0;
        margin: 0;
        letter-spacing: 1px;
        text-align: center;        
    }

    & li {
        font-size: 14px;
    }
`;

export default SubLinkContainer;