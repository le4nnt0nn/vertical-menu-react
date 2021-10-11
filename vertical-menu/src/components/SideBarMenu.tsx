import { useState } from "react";
import { SideBarMenuCard, SideBarMenuItem } from "./types/types.d";

interface SideBarMenuProps {
    items: SideBarMenuItem[];
    card: SideBarMenuCard;
}

export function SideBarMenu({ items, card }: SideBarMenuProps) {
    const [isOpen, setIsOpen] = useState<boolean>(true);
    return <div>hulu</div>;
}