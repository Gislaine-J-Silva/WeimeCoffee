import { Container, Img } from "./styles";
import { Button } from "../Button";
import { getImageUrl } from "../../services/api";


export function BoxMenu({ product, onAddToCart }){
    return(
        <Container>
                <Img src={getImageUrl(product.img_product)} alt="produto"/>
                <h3>{product.name}</h3>
                <p>R${product.price.toFixed(2)} <span>{product.old_price.toFixed(2)}</span></p>
                <Button title="Adicionar ao Carrinho" onClick={() => onAddToCart(product)}/>
        </Container>
    )
};