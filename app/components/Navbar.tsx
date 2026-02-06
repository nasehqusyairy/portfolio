import { Menu } from "lucide-react";
import NavItems from "./NavItems";
import ThemeButton from "./ThemeButton";
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
    <nav className="bg-background/70 backdrop-blur-sm text-foreground fixed w-full z-20 top-0 border-b border-dashed">
      <div className="container mx-auto px-4 lg:px-0">
        <div className="flex items-center justify-between pb-3 pt-6">
          <h1 className="text-lg text-foreground font-bold">Moh. Nasyikh Al-Qusyairy</h1>
          <div className="flex gap-2 lg:gap-4 items-center">
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