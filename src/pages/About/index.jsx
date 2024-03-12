import { Container, Subject, PageWrapper } from "./styles";
import aboutImage from "../../assets/imgAbout.jpg";
import { Button } from "../../components/Button";

export function About(){
    return(
        <PageWrapper>
            <Container>
                <h1>SOBRE <span>NÓS </span></h1>
                <Subject>
                    <img src={aboutImage} alt="Imagem da empresa"/>
                    <div>
                        <div>
                            <h3>o que torna nosso café especial?</h3>
                            <p>o café é muito mais do que uma simples bebida. É um aroma que desperta os sentidos e um sabor que aquece a alma. A essência do café está em cada grão, em cada torra, em cada xícara. É a energia que ele nos proporciona pela manhã, a pausa que nos dá durante o dia e o conforto que nos traz à noite.</p>
                            <p>é a união que ele proporciona em torno de uma mesa, a conversa que ele estimula e a amizade que ele fortalece. O café é um verdadeiro tesouro, capaz de nos transportar para diferentes lugares do mundo e nos conectar com pessoas de diferentes culturas.</p>
                        </div>
                        <Button title="Saiba mais"/>
                    </div>
                </Subject>
            </Container>
        </PageWrapper>
    )

};