import React from 'react';
import Layout from "../../components/Layout/Layout/Layout";
import Banner from "../../components/Banner/Banner";
import SectionCaption from "../../components/SectionCaption/SectionCaption";
import ProductGrid from "../../components/ProductGrid/ProductGrid";

const HomePage: React.FC = () => {
    return (
        <Layout>
            <Banner/>
            <SectionCaption
                title="Shop now"
                text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."
            />
            <ProductGrid/>
        </Layout>
    )
};

export default HomePage;
