import { Container, TitleText } from "./styles";
import { CustomerReviews } from "../../components/CustomerReview";

export function Reviews() {
    return (
        <Container>
            <TitleText>
                AVALIAÇÕES DOS <span>CLIENTES</span>
            </TitleText>
            <CustomerReviews />
            <CustomerReviews />
            <CustomerReviews />
            <CustomerReviews />
            <CustomerReviews />
        </Container>
    );
}
