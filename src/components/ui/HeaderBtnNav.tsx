import { FC } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  children?: React.ReactNode;
  trigger: string;
  icon?: any;
}

export const listNav = [
  { name: "Оформить заказ", href: "/order/arrange" },
  { name: "Заказы", href: "/order/history" },
  { name: "Выйти", href: "/", styleLink: "border-t" },
];

const HeaderBtnNav: FC<Props> = ({ children, trigger, icon, className }) => {
  return (
    <NavigationMenu className={cn("w-full", className)}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="flex items-center gap-2 bg-primary hover:bg-primary">
            {/* {icon}
            {trigger} */}
          </NavigationMenuTrigger>

          {children}
          <NavigationMenuContent>
            <ul className="w-[132px] text-center flex flex-col justify-center">
              {listNav.map((item, index) => (
                <li
                  key={index}
                  className={`${item?.styleLink} py-2 w-full h-10 hover:bg-[#FFFAF6] hover:text-primary`}
                >
                  <NavigationMenuLink
                    className={`block w-full h-full`}
                    href={item.href}
                  >
                    {item.name}
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default HeaderBtnNav;
