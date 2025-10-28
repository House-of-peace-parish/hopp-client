import { MdLocationPin } from 'react-icons/md';
import { FaMobileAlt, FaChurch } from 'react-icons/fa';
import { IconType } from 'react-icons';

interface NavbarItem {
    id: number;
    icon: IconType;
    title: string;
    text: string;
    link: string;
}[];

export const navbarHeader: NavbarItem[] = [
    {
        id: 1,
        icon: MdLocationPin,
        title: '1042 Albert st',
        text: 'Regina, SK, S4R2P8',
        link: ''
    },
    {
        id: 2,
        icon: FaChurch,
        title: 'Worship with us',
        text: 'Sundays at 10am',
        link: ''
    },
    {
        id: 3,
        icon: FaMobileAlt,
        title: 'Contact us',
        text: '(306) 757-1004',
        link: ''
    }
]