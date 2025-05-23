import astronaut from "../../assets/astronaut.png";

import * as S from "./styles";

export function NotFound() {

    return (
        <S.NotFoundWrapper>
            <img src={astronaut} width={120} height={120} alt="Astronauta" />
            <S.NotFoundContent>
                <S.NotFoundTitle>Página não encontrada</S.NotFoundTitle>
                <S.NotFoundDescription>A página que você está procurando não existe ou foi removida</S.NotFoundDescription>
                <S.NotFoundButton to="/">Voltar para a loja</S.NotFoundButton>
            </S.NotFoundContent>
        </S.NotFoundWrapper>
    );

}
