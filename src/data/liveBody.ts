import { IconType } from "react-icons";
import { FaYoutube, FaFacebookSquare, FaPray, FaBible, FaChurch } from 'react-icons/fa';
import { BiLogoZoom } from 'react-icons/bi';
import church from '../assets/landPage/church.jpg'

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
            url: 'https://www.youtube.com/channel/yourchannel',
            icon: FaYoutube
        },
        {
            id: 2,
            name: 'Facebook',
            text: 'Watch on Facebook',
            url: 'https://www.facebook.com/yourpage',
            icon: FaFacebookSquare
        },
        {
            id: 3,
            name: 'Zoom',
            text: 'Watch on Zoom',
            url: 'https://www.twitch.tv/yourchannel',
            icon: BiLogoZoom
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
    image: church,
    schedule: [
        {
            id: 1,
            day: 'Sunday',
            time: '10:00 AM - 12:00 PM EST',
            icon: FaChurch
        },
        {
            id: 2,
            day: 'Wednesday',
            time: '7:00 PM - 8:30 PM EST',
            icon: FaBible
        },
        {
            id: 3,
            day: 'Friday',
            time: '6:00 PM - 7:30 PM EST',
            icon: FaPray
        }
    ]
}