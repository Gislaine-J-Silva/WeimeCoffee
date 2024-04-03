import { Container, ProductContainer } from "./styles";

import { TitleText } from "../../components/TitleText";
import { BoxProduct } from "../../components/BoxProduct";

export function Products(){
    return(
        <Container>
            <TitleText text="Nossos " highlightedWord="Produtos"/>
            
            <ProductContainer>
                <BoxProduct/>
                <BoxProduct/>
                <BoxProduct/>
            </ProductContainer>
        </Container>

    )
}