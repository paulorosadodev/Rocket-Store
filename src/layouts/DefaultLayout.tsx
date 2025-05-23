import { useState } from "react";
import { Outlet } from "react-router-dom";

import { MenuBar } from "../components/MenuBar";
import { SuccessToast } from "../components/SuccessToast";
import { LayoutContainer, Main } from "./styles";

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
