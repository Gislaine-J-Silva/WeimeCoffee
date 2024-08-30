import { Container, BoxIcon, Icons, ImgBox, Img, Box, Stars } from "./styles";
import { FaShoppingCart, FaHeart , FaEye } from "react-icons/fa";
import { StarReview } from "../../components/StarReview";
import { getImageUrl } from "../../services/api";

export function BoxProduct({ product, onAddToCart }){
    return(
        <Container>
            <BoxIcon>
                <Icons onClick={() => onAddToCart(product)}>
                    <FaShoppingCart />
                </Icons>

                <Icons>
                    <FaHeart />
                </Icons>

                <Icons>
                    <FaEye />
                </Icons>
            </BoxIcon>

            <ImgBox>
                <Img src={getImageUrl(product.img_product)} alt="foto do produto" />
            </ImgBox>

            <Box>
                <h3>{product.name}</h3>

                <Stars>
                    {/* Assumindo que StarReview pode receber uma classificação */}
                    {Array.from({ length: 5 }, (_, index) => (
                        <StarReview key={index} active={index < product.rating} />
                    ))}
                </Stars>

                <p>
                    R${product.price} <span>R$55,00</span>
                </p>
            </Box>
        </Container>
    )

}