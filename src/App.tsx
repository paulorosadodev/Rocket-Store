import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Router } from "./Router";
import { CartProvider } from "./context/CartContext";

function App() {

    return (
        <>
            <ThemeProvider theme={defaultTheme}>
                <CartProvider>
                    <Router />
                </CartProvider>
                <GlobalStyle />
            </ThemeProvider>
        </>
    );
}

export default App;
