import { MainHeader } from "@/shared/components";
import { Outlet } from "react-router-dom";

export const Layout = () => {
    return (
        <div className="flex flex-col h-screen w-screen">
            <MainHeader />
            <div className="flex-1 flex flex-row overflow-hidden">
                <Outlet />
            </div>
        </div>
    );
};
