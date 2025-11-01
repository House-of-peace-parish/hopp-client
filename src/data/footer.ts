import { IconType } from "react-icons";
import { MdLocationPin } from "react-icons/md";
import { FaRegClock } from 'react-icons/fa6';
import { HiOutlineChatBubbleLeftRight } from 'react-icons/hi2';

interface FooterLink {
    id: number;
    title: string;
    list: {
        id: number;
        header: string;
        text: string;
    }[];
    icon: IconType;
    link: string;
}[]


export const footerLinks: FooterLink[] = [
    {
        id: 1,
        title: 'Location',
        list: [
            {
                id: 1,
                header: '',
                text: '1042 Albert St, Regina, SK, S4R2P8'
            }
        ],
        icon: MdLocationPin,
        link: ''
    },
    {
        id: 2,
        title: 'Service Time',
        list: [
            {
                id: 1,
                header: 'Sunday service:',
                text: '09:30 AM CST'
            },
            {
                id: 2,
                header: 'Midweek Service (Every Wednesday):',
                text: '07:30 PM CST'
            },
        ],
        icon: FaRegClock,
        link: ''
    },
    {
        id: 3,
        title: 'Get in Touch',
        list: [
            {
                id: 1,
                header: 'Phone:',
                text: '+1 (306) 216-9058'
            },
            {
                id: 2,
                header: 'Email:',
                text: 'rccg.hop@yahoo.com'
            }
        ],
        icon: HiOutlineChatBubbleLeftRight,
        link: ''
    }
]