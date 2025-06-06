import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { Input } from "@/components/ui/input";

import { ShoppingCart } from "lucide-react";

import logo from "./images/logo.svg";
import { useDispatch } from "react-redux";
import { setActiveSidebar } from "@/store/activeSidebar";
import AppSidebar from "@/features/appSidebar";
import NavigateBtnHeader from "@/components/ui/navigateBtnHeader";
import { FC } from "react";

interface HeaderProps {
  lite: boolean;
}

const Header: FC<HeaderProps> = ({ lite }) => {
  const dispatch = useDispatch();

  return (
    <header className="border-b">
      <Container>
        <div className="flex justify-between py-[42px] items-center">
          {lite ? (
            <>
              <div className="logo">
                <a href="/">
                  <img src={logo} alt="logo" className="h-12 w-max" />
                </a>
              </div>
              <NavigateBtnHeader />
            </>
          ) : (
            <>
              <div className="logo">
                <a href="/">
                  <img src={logo} alt="logo" className="h-12 w-max" />
                </a>
              </div>
              <div className="w-[765px] mx-[42px]">
                <Input
                  type="search"
                  className=" h-[50px] py-3 border-none bg-[#f9f9f9] pl-5 rounded-[15px]"
                  id="search"
                  placeholder="Поиск пиццы..."
                />
              </div>
              <div className="flex items-center gap-[15px]">
                <NavigateBtnHeader />
                <Button
                  className="px-[14px] py-[22px] font-semibold"
                  variant="primary"
                  onClick={() => dispatch(setActiveSidebar(true))}
                >
                  <ShoppingCart />
                </Button>
              </div>
            </>
          )}
        </div>
        <AppSidebar />
      </Container>
    </header>
  );
};

export default Header;
