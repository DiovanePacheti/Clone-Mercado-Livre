import React from "react";

import { Container,LogoSite, InputMenu, Menu,CapsulaInput, AlternativeEmail } from "./styles";
import Input from "../Input";
import Li from "../Li";

const Header: React.FC = () => {
  return(

    <Container>
        <LogoSite />
        <InputMenu>
            <CapsulaInput>
              <Input />
              <AlternativeEmail />
            </CapsulaInput>
            <Menu>
              <Li name="Categorias" />
              <Li name="Ofertas do dia" />
              <Li name="Histórico" />
              <Li name="Supermercado" />
              <Li name="Lojas oficiais" />
              <Li name="Vender" />
              <Li name="Contato" />
            </Menu>
        </InputMenu>
    </Container>
  ); 
};

export default Header;
