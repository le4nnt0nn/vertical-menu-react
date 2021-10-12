import { useState } from "react";
import { VscMenu } from 'react-icons/vsc';
import { SideBarMenuCard, SideBarMenuItem } from "./types/types.d";
import { classNames } from '../util/classes';
interface SideBarMenuProps {
    items: SideBarMenuItem[];
    card: SideBarMenuCard;
}

export function SideBarMenu({ items, card }: SideBarMenuProps) {
    const [isOpen, setIsOpen] = useState<boolean>(true);
    return <div 
        className={classNames('SideBarMenu', isOpen ? 'expanded' : 'collapsed')}
    >
        <div className='menuButton'>
            <button>
                <VscMenu/>
            </button>
        </div>
    </div>;
}