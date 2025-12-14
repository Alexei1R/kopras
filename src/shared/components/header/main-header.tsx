import type React from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/shared/components";
import { ROUTES } from "@/shared/constants";
import ThemeSwitcher from "../theme/theme-switcher";

const MainHeader: React.FC = () => {
    const navigate = useNavigate();
    return (
        <Header>
            <Header.Content variant="default" className="pr-4">
                <Header.Logo
                    icon={
                        <img
                            src="/kopras.png"
                            alt="kopras"
                            className="
                                h-6 w-6 rounded-md
                                grayscale opacity-80
                                transition-all duration-300
                                hover:rotate-180 hover:opacity-100 hover:grayscale-0
                            "
                        />
                    }
                    title="kopras"
                    onClick={() => navigate(ROUTES.CANVAS)}
                />

                <Header.Group className="ml-4">
                    <ThemeSwitcher variant="icon" />
                </Header.Group>
            </Header.Content>
        </Header>
    );
};

export { MainHeader };
