import { Box, Icon, Star, User } from "./styles";
import { MdReviews } from "react-icons/md";

import userImg from "../../assets/boy1.jpg";
import { StarReview } from "../../components/StarReview";

export function CustomerReviews(){
    return(
            <Box>
                <Icon>
                    <MdReviews/>
                </Icon>
                <p>
                Acabei de experimentar o café desta cafeteria pela primeira vez e fiquei muito impressionado! O sabor era incrivelmente rico e a textura era perfeita - nem muito forte, nem muito fraco. Além disso, o ambiente da cafeteria era muito acolhedor e o atendimento dos funcionários foi excepcional. Fiquei muito feliz por ter encontrado este lugar e definitivamente voltarei para experimentar mais opções do cardápio.
                </p>
                <User style={{backgroundImage: `url(${userImg})`}} />
                <h3>Luciano Henrique</h3>
                <Star>
                    <StarReview/>
                    <StarReview/>
                    <StarReview/>
                    <StarReview/>
                    <StarReview/>
                </Star>
            </Box>
    )
}