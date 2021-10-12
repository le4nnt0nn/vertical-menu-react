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

    function handleClick() {
        setIsOpen(!isOpen);
    }

    return <div 
        className={classNames('SideBarMenu', isOpen ? 'expanded' : 'collapsed')}
    >
        <div className='menuButton'>
            <button className='hamburgerButton' onClick={handleClick}>
                <VscMenu/>
            </button>
        </div>
    </div>;
}