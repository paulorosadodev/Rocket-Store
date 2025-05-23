import { ThemeProvider } from "styled-components";

import { Router } from "./router";

import { CartProvider } from "./context/CartContext";

import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

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
