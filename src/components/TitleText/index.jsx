import { Container } from "./styles";

export function TitleText( { text, highlightedWord} ){
    const [beforeHighlighted, afterHighlighted] = text.split(highlightedWord);


    return(
        <Container>
            {beforeHighlighted}
            {highlightedWord && <span>{highlightedWord}</span>}
            {afterHighlighted}
        </Container>
    )
}