import { HomeWrapper } from "./styles";
import { useCart } from "../../hooks/useCart";

export const Home = () => {
    const { incrementCart } = useCart();
    return (
        <HomeWrapper>
            <h1>Welcome to the Home Page</h1>
            <button onClick={incrementCart} style={{marginTop: 16, padding: "8px 16px", borderRadius: 4, background: "#8257e6", color: "#fff", border: "none", cursor: "pointer"}}>Adicionar ao carrinho</button>
        </HomeWrapper>
    );
};