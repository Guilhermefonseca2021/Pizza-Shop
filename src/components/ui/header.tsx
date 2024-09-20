import { Home, Pizza, SeparatorVertical, UtensilsCrossed } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center gap-6 px-6">
        <Pizza className="h-6 w-6" />
        <SeparatorVertical className="h-6" />
        <nav className="flex items-center space-x-4 lg:space-x-6">
          <Link to="/">
            <Home className="h-4 p-4" />
            Inicio
          </Link>
          <Link to="/">
            <UtensilsCrossed  className="h-4 p-4"/>
            pedidos
          </Link>
        </nav>
      </div>
    </div>
  );
}
