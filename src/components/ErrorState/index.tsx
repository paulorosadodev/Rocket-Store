import astronaut from "../../assets/astronaut.png";
import * as S from "./styles";

interface ErrorStateProps {
    message?: string;
    error?: string;
    onRetry?: () => void;
    hideRetry?: boolean;
}

export function ErrorState({ message = "Ocorreu um erro ao carregar os dados", error, onRetry, hideRetry }: ErrorStateProps) {
    return (
        <S.ErrorContainer>
            <img src={astronaut} alt="Erro ao carregar" />
            <h2>{message}</h2>
            {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
            {!hideRetry && (
                <S.RetryButton onClick={onRetry || (() => window.location.reload())}>
                    Tentar novamente
                </S.RetryButton>
            )}
        </S.ErrorContainer>
    );
}
