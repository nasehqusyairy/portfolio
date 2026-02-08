import { Menu } from "lucide-react";
import NavItems from "./nav-items";
import ThemeButton from "./theme-button";
import { Button } from "./ui/button";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";

export default function Navbar() {
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Experiences", href: "#experiences" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <nav className="top-0 z-20 fixed bg-background/70 backdrop-blur-sm border-b border-dashed w-full text-foreground">
      <div className="mx-auto px-4 lg:px-0 container">
        <div className="flex justify-between items-center pt-6 pb-3">
          <h1 className="font-bold text-foreground text-lg">Moh. Nasyikh Al-Qusyairy</h1>
          <div className="flex items-center gap-2 lg:gap-4">
            <NavItems items={navItems} className="hidden lg:block" />
            <ThemeButton />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant={'outline'} size={'icon'} className="lg:hidden">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetClose></SheetClose>
                </SheetHeader>
                <div className="ps-12">
                  <NavItems items={navItems} className="block mb-4" />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}