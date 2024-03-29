import { Container, ReviewsContainer } from "./styles";
import { CustomerReviews } from "../../components/CustomerReview";

import { TitleText } from "../../components/TitleText";

export function Reviews() {
    return (
        <Container>
                <TitleText text="avaliações dos " highlightedWord="clientes"/>
                <ReviewsContainer>
                    <CustomerReviews />
                    <CustomerReviews />
                    <CustomerReviews />
                </ReviewsContainer>
            </Container>
    );
}
