"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, ShoppingCart, User, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Header() {
  const router = useRouter();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
    router.push(href);
  };

  const NavItems = () => (
    <>
      <Link
        href="/"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        onClick={(e) => handleSmoothScroll(e, "/")}
      >
        Home
      </Link>
      <Link
        href="/#featured-products"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        onClick={(e) => handleSmoothScroll(e, "/products")}
      >
        Products
      </Link>
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="mr-2 md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4">
                <NavItems />
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/" className="mr-6 flex items-center space-x-2">
            {/* <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-mZ2AGnIWhnFQitBZ7Rv4uwzATvWm2s.png"
            alt="NextStor Logo"
            width={120}
            height={40}
            className="aspect-[3/1] h-8 w-auto"
          /> */}

            <h3 className=" font-bold text-2xl">NextStore</h3>
          </Link>
          <div className="flex flex-1 items-center justify-end space-x-2 md:justify-between">
            <nav className="hidden space-x-6 md:flex">
              <NavItems />
            </nav>
            <div className="flex items-center space-x-2">
              {isSearchOpen ? (
                <form className="relative" onSubmit={(e) => e.preventDefault()}>
                  <Input
                    type="search"
                    placeholder="Search products..."
                    className="w-full md:w-[300px] pl-8"
                  />
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-2"
                    onClick={() => setIsSearchOpen(false)}
                  >
                    <X className="h-4 w-4" />
                    <span className="sr-only">Close search</span>
                  </Button>
                </form>
              ) : (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsSearchOpen(true)}
                  className="md:hidden"
                >
                  <Search className="h-5 w-5" />
                  <span className="sr-only">Search</span>
                </Button>
              )}
              <Button variant="ghost" size="icon" className="hidden md:flex">
                <User className="h-5 w-5" />
                <span className="sr-only">Account</span>
              </Button>
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">Shopping Cart</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
