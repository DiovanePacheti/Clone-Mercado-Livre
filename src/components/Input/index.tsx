import React from 'react';

import {Container} from './styles';

const Input: React.FC = () => {
    return(
        <Container>
            <input type="text" placeholder="Buscar produtos, marcas e muito mais..."/>
        </Container>
    )
}
export default Input;