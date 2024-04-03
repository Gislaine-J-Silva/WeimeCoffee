import { Container, BoxIcon, Icons, ImgBox, Img, Box, Stars } from "./styles";

import { FaShoppingCart, FaHeart , FaEye } from "react-icons/fa";

import imgProduct from "../../assets/product.png";
import { StarReview } from "../../components/StarReview";

export function BoxProduct(){
    return(
        <Container>
            <BoxIcon>
                <Icons>
                    <FaShoppingCart/>
                    
                </Icons>

                <Icons>
                    <FaHeart/>
                </Icons>

                <Icons>
                    <FaEye/>
                </Icons>
            </BoxIcon>

            <ImgBox>
                <Img src={imgProduct} alt="foto do produto"/>
            </ImgBox>

            <Box>
                <h3>Café Columbia</h3>

                <Stars>
                    <StarReview/>
                    <StarReview/>
                    <StarReview/>
                    <StarReview/>
                    <StarReview/>
                </Stars>

                <p>R$49,99 <span>R$65,99</span></p>
            </Box>
        </Container>
    )

}