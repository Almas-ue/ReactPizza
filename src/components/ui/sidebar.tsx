import { useActiveSidebar } from "@/hooks/useReducer";
import { cn } from "@/lib/utils";
import { setActiveSidebar } from "@/store/activeSidebar";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { SidebarProps } from "../types/sidebarTypes";

const Sidebar: React.FC<SidebarProps> = ({ children, className }) => {
  const open = useActiveSidebar();
  const [active, setActive] = useState(open);
  useEffect(() => setActive(open), [open]);

  return (
    <div
      className={cn(
        active ? "w-[395px]" : "w-[0px]",
        "fixed top-0 bg-[#F4F1EE] min-h-screen flex flex-col transition-all duration-300 z-50",
        "right-0",
        className
      )}
    >
      {children}
    </div>
  );
};

const HeaderSidebar: React.FC<SidebarProps> = ({ children, className }) => {
  const dispatch = useDispatch();

  return (
    <header className={cn("flex justify-between items-center p-5", className)}>
      {children}
      <button onClick={() => dispatch(setActiveSidebar(false))}>
        <X />
      </button>
    </header>
  );
};
HeaderSidebar.displayName = "HeaderSidebar";

const ContentSidebar: React.FC<SidebarProps> = ({ children, className }) => {
  return (
    <section className={cn("flex flex-col gap-3 flex-1", className)}>
      {children}
    </section>
  );
};
ContentSidebar.displayName = "ContentSidebar";

const FooterSidebar: React.FC<SidebarProps> = ({ children, className }) => {
  return <footer className={cn("px-5", className)}>{children}</footer>;
};
FooterSidebar.displayName = "FooterSidebar";

export { Sidebar, HeaderSidebar, ContentSidebar, FooterSidebar };
