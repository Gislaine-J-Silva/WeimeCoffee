import { Container, Img } from "./styles";
import imgProduct from "../../assets/Café Latte.jpg";
import { Button } from "../Button";

export function BoxMenu(){
    return(
        <Container>
                <Img src={imgProduct} alt="produto"/>
                <h3>Café Latte</h3>
                <p>R$4.50 <span>5.70</span></p>
                <Button title="Adicionar ao Carrinho"/>
        </Container>
    )
};