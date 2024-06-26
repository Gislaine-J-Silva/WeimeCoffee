import { Container, Header, Avatar, Logout, ProfileOption, ConfigProfile } from "./styles";

import image from "../../assets/mina4.jpg";
import { RiShutDownLine } from "react-icons/ri";


export function Profile(){
    return(
        <Container>
            <Header>
                <Avatar>
                    <img src={image}/>
                </Avatar>
                <div>
                    <span>Bem vindo</span>
                    <strong>Gislaine Jéssica</strong>
                </div>

                <Logout>
                    <RiShutDownLine/>
                </Logout>
            </Header>
            <ProfileOption>
                
            </ProfileOption>
            <ConfigProfile/>
        </Container>
    )
}