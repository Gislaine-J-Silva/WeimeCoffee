import { Container,  MenuContainer } from "./styles";
import { TitleText } from "../../components/TitleText";
import { BoxMenu } from "../../components/BoxMenu";

export function Menu(){
    return (
        <Container>
            <TitleText text="Nosso " highlightedWord="Menu"/>

            <MenuContainer>
                <BoxMenu/>
                <BoxMenu/>
                <BoxMenu/>
            </MenuContainer>
        </Container>
    )
}