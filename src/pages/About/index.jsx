import { Container, Subject, PageWrapper, Box_Img, ContainerAbout } from "./styles";
import aboutImage from "../../assets/imgAbout.jpg";
import { TitleText } from "../../components/TitleText";
import { Button } from "../../components/Button";

export function About(){
    return(
        <PageWrapper>
            <Container>
                <TitleText text="Sobre " highlightedWord="Nós"/>
                <Subject>
                    <Box_Img>
                        <img src={aboutImage} alt="Imagem da empresa"/>
                    </Box_Img>
                    <ContainerAbout>
                        <h3>o que torna nosso café especial?</h3>
                        <p>o café é muito mais do que uma simples bebida. É um aroma que desperta os sentidos e um sabor que aquece a alma. A essência do café está em cada grão, em cada torra, em cada xícara. É a energia que ele nos proporciona pela manhã, a pausa que nos dá durante o dia e o conforto que nos traz à noite.</p>
                        <p>é a união que ele proporciona em torno de uma mesa, a conversa que ele estimula e a amizade que ele fortalece. O café é um verdadeiro tesouro, capaz de nos transportar para diferentes lugares do mundo e nos conectar com pessoas de diferentes culturas.</p>
                        <Button title="Saiba mais"/>
                    </ContainerAbout>
                </Subject>
            </Container>
        </PageWrapper>
    )

};