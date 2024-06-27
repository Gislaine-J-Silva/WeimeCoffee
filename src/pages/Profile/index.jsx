import { Container, Header, Avatar, Logout, ProfileOption, ConfigProfile } from "./styles";

import image from "../../assets/mina4.jpg";
import { IoIosLogOut } from "react-icons/io";


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
                    <IoIosLogOut/>
                </Logout>
            </Header>
            <ProfileOption>
                <li><strong>Meu Perfil</strong></li>
                <li><strong>Minhas compras</strong></li>
                <li><strong>Favoritos</strong></li>
                <li><strong>Histórico</strong></li>
                <li><strong>Cupons</strong></li>
                <li><strong>Assinatura</strong></li>
                <li><strong>Ajuda</strong></li>
            </ProfileOption>
            <ConfigProfile/>
        </Container>
    )
}