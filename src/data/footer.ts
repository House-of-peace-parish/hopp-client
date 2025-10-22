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
                header: 'Sunday service',
                text: '10:00 AM - 11:30 AM'
            },
            {
                id: 2,
                header: 'Wednesday Bible Study',
                text: '19:00 PM - 20:00 PM'
            },
            {
                id: 3,
                header: 'Monthly Crossover',
                text: '23:00 PM - 00:00 PM'
            }
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
                header: 'Phone',
                text: '+1 (306)-757-1004'
            },
            {
                id: 2,
                header: 'Email',
                text: 'info@houseofpeace.org'
            }
        ],
        icon: HiOutlineChatBubbleLeftRight,
        link: ''
    }
]