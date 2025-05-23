import { useState } from "react";
import { Outlet } from "react-router-dom";

import styled from "styled-components";

import { MenuBar } from "../components/MenuBar";
import { SuccessToast } from "../components/SuccessToast";

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

    const [toast, setToast] = useState<string | null>(null);

    return (
        <LayoutContainer>
            <MenuBar setToast={setToast} />
            <Main>
                <Outlet context={{ setToast }} />
            </Main>
            {toast && <SuccessToast message={toast} onClose={() => setToast(null)} />}
        </LayoutContainer>
    );
}
