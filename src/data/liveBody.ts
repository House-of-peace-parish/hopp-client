import { IconType } from "react-icons";
import { FaYoutube, FaFacebookSquare, FaPray, FaBible, FaChurch, FaTiktok } from 'react-icons/fa';
import { BiLogoZoom } from 'react-icons/bi';
import broadcast from '../assets/gallery/broadcast.jpg'

interface StreamPlatform {
    title: string;
    header: string;
    streams: {
        id: number;
        name: string;
        text: string;
        url: string;
        icon: IconType;
    }[];
}

export const streamingPlatforms: StreamPlatform = {
    title: 'Watch our Live streams',
    header: 'Please select a platform to watch our live streams',
    streams: [
        {
            id: 1,
            name: 'YouTube',
            text: 'Watch on YouTube',
            url: 'https://www.youtube.com/@rccghouseofpeacereginaskcanada/',
            icon: FaYoutube
        },
        {
            id: 2,
            name: 'Facebook',
            text: 'Watch on Facebook',
            url: 'https://www.facebook.com/RCCGHouseofPeaceRegina',
            icon: FaFacebookSquare
        },
        {
            id: 3,
            name: 'TikTok',
            text: 'Watch on TikTok',
            url: 'https://www.tiktok.com/@rccghouseofpeace.regina',
            icon: FaTiktok
        }
    ]
};

interface Broadcast {
    title: string;
    image: any;
    schedule: {
        id: number;
        day: string;
        time: string;
        icon: IconType;
    }[];
}

export const broadCastSchedule: Broadcast = {
    title: 'Broadcasting Weekly',
    image: broadcast,
    schedule: [
        {
            id: 1,
            day: 'Sunday',
            time: '09:30 AM CST',
            icon: FaChurch
        }
    ]
}