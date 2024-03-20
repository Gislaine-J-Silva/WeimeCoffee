import { Container, Header, ReviewsContainer } from "./styles";
import { CustomerReviews } from "../../components/CustomerReview";

export function Reviews() {
    return (
        <Container>
                <Header>
                    avaliações dos <span>clientes</span>
                </Header>
                <ReviewsContainer>
                    <CustomerReviews />
                    <CustomerReviews />
                    <CustomerReviews />
                    <CustomerReviews />
                    <CustomerReviews />
                </ReviewsContainer>
            </Container>
    );
}
