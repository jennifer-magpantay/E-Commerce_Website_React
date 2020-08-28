import React from "react";
import Wrapper from "./Wrapper";
import MainBanner from "./MainBanner";
import Caroussel from "./Caroussel";
import ProductSmallView from "./ProductSmallView";
import ProductWrapper from "./ProductWrapper";
import ProductFullView from './ProductFullView';

function Main() {
  return (
    <Wrapper>
      <MainBanner>
        <Caroussel />
        <ProductWrapper>
          <ProductSmallView
            image="https://www.amazon.co.uk/b?ie=UTF8&node=15747904031&pf_rd_r=JZ002GK8E7MA4EFE6HHF&pf_rd_p=7d7033b8-8a4f-46ae-875e-5d8a39cf3270&pd_rd_r=8c2d7e39-ceb8-4c9b-8108-0635b93e1a22&pd_rd_w=PqGYk&pd_rd_wg=o7hLl"
            id="12345"
            title="Lorem Ipsum"
            price={11.99}
            rating={4}
          />
          <ProductSmallView
            image="https://www.amazon.co.uk/b?ie=UTF8&node=15747904031&pf_rd_r=JZ002GK8E7MA4EFE6HHF&pf_rd_p=7d7033b8-8a4f-46ae-875e-5d8a39cf3270&pd_rd_r=8c2d7e39-ceb8-4c9b-8108-0635b93e1a22&pd_rd_w=PqGYk&pd_rd_wg=o7hLl"
            id="12345"
            title="Lorem Ipsum"
            price={11.99}
            rating={4}
          />
          <ProductSmallView
            image="https://www.amazon.co.uk/b?ie=UTF8&node=15747904031&pf_rd_r=JZ002GK8E7MA4EFE6HHF&pf_rd_p=7d7033b8-8a4f-46ae-875e-5d8a39cf3270&pd_rd_r=8c2d7e39-ceb8-4c9b-8108-0635b93e1a22&pd_rd_w=PqGYk&pd_rd_wg=o7hLl"
            id="12345"
            title="Lorem Ipsum"
            price={11.99}
            rating={4}
          />
          <ProductSmallView
            image="https://www.amazon.co.uk/b?ie=UTF8&node=15747904031&pf_rd_r=JZ002GK8E7MA4EFE6HHF&pf_rd_p=7d7033b8-8a4f-46ae-875e-5d8a39cf3270&pd_rd_r=8c2d7e39-ceb8-4c9b-8108-0635b93e1a22&pd_rd_w=PqGYk&pd_rd_wg=o7hLl"
            id="12345"
            title="Lorem Ipsum"
            price={11.99}
            rating={4}
          />
        </ProductWrapper>
        {/* productrow */}

        <ProductFullView 
        image="https://www.amazon.co.uk/b?ie=UTF8&node=15747904031&pf_rd_r=JZ002GK8E7MA4EFE6HHF&pf_rd_p=7d7033b8-8a4f-46ae-875e-5d8a39cf3270&pd_rd_r=8c2d7e39-ceb8-4c9b-8108-0635b93e1a22&pd_rd_w=PqGYk&pd_rd_wg=o7hLl"
        id="12345"
        title="Lorem Ipsum"
        price={11.99}
        rating={4}/>
      </MainBanner>
    </Wrapper>
  );
}

export default Main;
