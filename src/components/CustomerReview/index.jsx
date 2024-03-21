import { Container, Box, User, Name, Stars, ReviewText, Icon } from "./styles";
import { MdReviews } from "react-icons/md";
import { StarReview } from "../../components/StarReview";
import userImg from "../../assets/boy1.jpg";

export function CustomerReviews() {
    return (
        <Container>

            <html>
                <Box>
                    <Icon>
                        <MdReviews/>
                    </Icon>
                    <ReviewText>
                        Acabei de experimentar o café desta cafeteria pela primeira vez e fiquei muito impressionado! O sabor era incrivelmente rico e a textura era perfeita - nem muito forte, nem muito fraco. Além disso, o ambiente da cafeteria era muito acolhedor e o atendimento dos funcionários foi excepcional. Fiquei muito feliz por ter encontrado este lugar e definitivamente voltarei para experimentar mais opções do cardápio.
                    </ReviewText>
                    <User src={userImg} alt="User" />
                    <Name>Usuário Anônimo</Name>
                    <Stars>
                        <StarReview />
                        <StarReview />
                        <StarReview />
                        <StarReview />
                        <StarReview />
                    </Stars>
                </Box>
            </html>
        </Container>
    );
}

