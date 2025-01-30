import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { Input } from "@/components/ui/input";

import { ShoppingCart, User } from 'lucide-react';

import logo from "./images/logo.svg";

const Header = () => {
  return (
    <header className="border-b">
      <Container>
        <div className="flex justify-between my-[42px] items-center">
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
          <div className="entitles flex items-center gap-[15px]">
            <Button className="rounded-[15px] px-[14px] py-[22px] font-semibold" variant="outline"><User />Войти</Button>
            <Button className="rounded-[15px] px-[14px] py-[22px] font-semibold" variant="outline"><ShoppingCart /></Button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
