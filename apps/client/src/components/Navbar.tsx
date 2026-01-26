import Image from "next/image";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { Bell, Home, ShoppingCart } from "lucide-react";
import ShoppingCartIcon from "./ShoppingCartIcon";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between border-b border-gray-200 pb-4">
        {/* LEFT */}
        <Link href="/" className="flex items-center flex-shrink-0">
          {/* Logo untuk mobile & tablet */}
          <Image 
            src="/logo-dkm.png" 
            alt="DutaKatupMas" 
            width={40} 
            height={40} 
            className="block lg:hidden w-10 h-10" 
          />
          {/* Logo untuk desktop */}
          <Image 
            src="/banner-dkm.png" 
            alt="DutaKatupMas" 
            width={250} 
            height={50} 
            className="hidden lg:block h-12 w-auto" 
          />
        </Link>
        {/* RIGHT */}
        <div className="flex items-center gap-4">
            <SearchBar/>
            <div className="flex items-center gap-4">
              <Link href="/">
                  <Home className="w-5 h-5 text-gray-600"/>
              </Link>
              <Bell className="w-5 h-5 text-gray-600"/>
              <ShoppingCartIcon/>
              <Link href="/login" className="text-sm whitespace-nowrap">Sign in</Link>
            </div>
        </div>
    </nav>
  );
};

export default Navbar;