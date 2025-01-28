import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { ShoppingCart, User } from 'lucide-react';

import styles from "./style.module.scss";
import logo from "./images/logo.svg";
import { cn } from "@/lib/utils";

const Header = () => {
  return (
    <header>
      <Container>
        <div className="flex justify-between py-[42px] items-center">
          <div className="logo">
            <a href="/">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className="inputSearch inline-flex">
            <input
              className={
                styles.inputSearch + " flex max-w-[765px] py-3 pl-5 rounded-[15px]"
              }
              type="search"
              id="search"
              placeholder="Поиск пиццы..."
            />
          </div>
          <div className="entitles flex items-center gap-[15px]">
            <Button className="" variant="outline"><User /> Log in</Button>
            <Button className="" variant="outline"><ShoppingCart /></Button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
