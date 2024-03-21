import { Container, BlogsText, ContainerBlog} from "./styles";
import { BoxBlog } from "../../components/BoxBlog";

export function Blogs(){
    return(
        <Container>
            <BlogsText>
                    Nossos <span>Blogs </span>
            </BlogsText>

            <ContainerBlog>
                <BoxBlog/>
                <BoxBlog/>
                <BoxBlog/>
            </ContainerBlog>
        </Container>
    )
}