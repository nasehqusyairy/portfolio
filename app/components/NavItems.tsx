import { useState } from "react";
import { Link } from "react-router";

type NavItem = {
  label: string;
  href: string;
  isActive?: boolean;
};

type NavItemsProps = {
  items: NavItem[];
  className?: string;
};

export default function NavItems({ items, className }: NavItemsProps) {

  const [navItems, setNavItems] = useState<NavItem[]>(items);

  const toggleActive = (item: NavItem) => {
    setNavItems(navItems.map(el => ({ ...el, isActive: el.label === item.label ? !el.isActive : false })));
  }

  return (
    <>
      {navItems.map((item, index) => <Link key={`nav-item-${index}`} to={item.href} className={`${className} py-1  ${item.isActive ? 'text-primary dark:text-white' : 'dark:text-white/50'}`} onClick={() => toggleActive(item)}>{item.label}</Link>)}
    </>
  )
}