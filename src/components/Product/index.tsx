import React from 'react';
import tshirtImage from '../../assets/tshirt.png';
import ProductAction from '../ProductAction';
import SellerInfo from '../SellerInfo';
import { Container, Row, Panel, Column, Gallery, Section, Description} from './styles';

const Product: React.FC = () =>{
    return(
        <Container>
            <Row>
                <a href="#">Compartilhar</a>
                <a href="#">Vender um igual</a>
            </Row>
            <Panel>
                <Column>
                    <Gallery>
                        <img src={tshirtImage} alt="T-Shirt"/>
                    </Gallery>
                    <Info />
                </Column>
                <Column>
                    <ProductAction />
                    <SellerInfo />
                    <WarrantySection />
                    <WarrantySection />
                    <WarrantySection /> 
                </Column>
            </Panel>
        </Container>
    );
};

const WarrantySection: React.FC = () =>(
    <Section>
        <h4>Garantia</h4>
        <div>
            <span>
                <p className="title">Compra garantida com o Lorem Ipsum</p>
                <p className="description">
                    Receba o produto que esta esperando 
                </p>
            </span>
            <span>
                <p className="title">Garantia do vendedor</p>
                <p className="description">sem garantia</p>
            </span>
            <a href="#">Saiba mais sobre garantia</a>
        </div>
    </Section>
);

const Info = () =>(
    <Description>
        <h2>Descrição</h2>
        <p>Lorem ipsum dolor sit amet 
           consectetur adipisicing elit. 
           Sapiente adipisci minima perspiciatis 
           ipsa obcaecati rem, omnis consequatur, 
           quae, necessitatibus laborum 
           rerum tempora voluptas?
        <br />
        <br />
        Items inclusos:<br />

        - 12x Led <br/>
        - 12x Led <br/>
        - 12x Led <br/>
        - 12x Led <br/>
        <br/>
        Lorem ipsum dolor sit amet 
        consectetur adipisicing elit. 
        Quisquam, recusandae enim. Expedita, 
        exercitationem?
        Lorem ipsum dolor sit amet 
        consectetur adipisicing elit. 
        Quisquam, recusandae enim. Expedita, 
        exercitationem?Lorem ipsum dolor sit amet 
        consectetur adipisicing elit. 
        Quisquam, recusandae enim. Expedita, 
        exercitationem?Lorem ipsum dolor sit amet 
        consectetur adipisicing elit. 
        Quisquam, recusandae enim. Expedita, 
        exercitationem?
        </p>
    </Description>
);

export default Product; 