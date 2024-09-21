import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Button } from "./button";
import { Building, ChevronDown, LogOut } from "lucide-react";

export default function AccountMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2 select-non">
            Pizza shop
            <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="p-54">
        <DropdownMenuLabel className="flex flex-col">
            <span>Guilherme Fonseca</span>
            <span className="text-sm font-normal text-muted-foreground">guihfonseca2021</span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex items-center border-r-8 hover:cursor-pointer my-2">
            <Building className="h-4 w-4 m-2" />
            <span>Perfil da loja</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center border-r-8 hover:cursor-pointer my-2 text-rose-500 dark:text-rose-400">
            <LogOut className="h-4 w-4 m-2" />
            <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
