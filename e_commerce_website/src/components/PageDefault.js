import React from 'react';
import Wrapper from './Wrapper';
import Container from './Container';
import Header from './Header';
import SignOverFooter from './SignOverFooter';
import Footer from './Footer';

function PageDefault({children}) {
    return (
        <>
        <Wrapper>
            <Header />
            <Container>
                { children }
            </Container>
            <SignOverFooter />
            <Footer />
        </Wrapper>            
        </>
    )
}

export default PageDefault;
