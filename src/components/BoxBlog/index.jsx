import { Box, Image, InfoBlog } from "./styles";
import imageBlog1 from "../../assets/blog-1.jpeg";

import { Button } from "../../components/Button";

export function BoxBlog(){
    return(
        <Box>
                <Image>
                    <img src={imageBlog1} alt="Foto do Blog" />
                </Image>

                <InfoBlog>
                    <a href="#">Café, Harmonia e Sabor</a>

                    <span>por administrador / 21st Mar, 2024</span>

                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>

                    <Button title="Saiba Mais"/>
                </InfoBlog>
        </Box>

    )
}