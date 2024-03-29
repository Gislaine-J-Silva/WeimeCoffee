import { Container, ContainerBlog} from "./styles";
import { BoxBlog } from "../../components/BoxBlog";
import { TitleText } from "../../components/TitleText";

export function Blogs(){
    return(
        <Container>
            <TitleText text="nossos " highlightedWord="blogs"/>

            <ContainerBlog>
                <BoxBlog/>
                <BoxBlog/>
                <BoxBlog/>
            </ContainerBlog>
        </Container>
    )
}