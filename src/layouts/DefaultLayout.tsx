import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { MenuBar } from "../components/MenuBar";

const LayoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

const Main = styled.main`
    width: 100%;
    flex: 1;
`;

export function DefaultLayout() {
    return (
        <LayoutContainer>
            <MenuBar />
            <Main>
                <Outlet />
            </Main>
        </LayoutContainer>
    );
}
