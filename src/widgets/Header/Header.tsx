import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { ShoppingCart, User } from 'lucide-react';

import styles from "./style.module.scss";
import logo from "./images/logo.svg";

const Header = () => {
  return (
    <header>
      <Container>
        <div className="headerInner flex justify-between py-[42px] items-center">
          <div className="logo">
            <a href="/">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className="inputSearch">
            <input
              className={
                styles.inputSearch + " w-[765px] py-3 pl-5 rounded-[15px]"
              }
              type="search"
              id="search"
              placeholder="Поиск пиццы..."
            />
          </div>
          <div className="entitles flex items-center gap-[15px]">
            <Button className=""><User /> Log in</Button>
            <Button><ShoppingCart /></Button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
