import astronaut from "../../assets/astronaut.png";

import { NotFoundWrapper, NotFoundContent, NotFoundTitle, NotFoundDescription, NotFoundButton } from "./styles";

export function NotFound() {
    return (
        <NotFoundWrapper>
            <img src={astronaut} width={120} height={120} alt="Astronauta" />
            <NotFoundContent>
                <NotFoundTitle>Página não encontrada</NotFoundTitle>
                <NotFoundDescription>
                    A página que você está procurando não existe ou foi removida.
                </NotFoundDescription>
                <NotFoundButton to="/">
                    Voltar para a loja
                </NotFoundButton>
            </NotFoundContent>
        </NotFoundWrapper>
    );
}
