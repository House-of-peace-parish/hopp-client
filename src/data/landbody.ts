import { IconType } from 'react-icons';
import { BiDirections } from 'react-icons/bi';
import { FaPray } from 'react-icons/fa';
import { LuBus } from 'react-icons/lu';
import { MdOutlineVolunteerActivism } from 'react-icons/md';
import potluck from '../assets/landPage/potluck.jpg';
import handbook from '../assets/landPage/handbook.jpg'
import band from '../assets/landPage/band.jpg'

interface Event {
    id: number;
    title: string;
    date: string;
    time: string;
    location: string;
    description: string;
    image: any;
    link: string;
}[];

export const upcomingEvents: Event[] = [
    {
        id: 1,
        title: "Thanksgiving Service",
        date: "2024-07-14",
        time: "10:00 AM",
        location: "Main Auditorium",
        description: "Join us for a special thanksgiving service to celebrate God's blessings.",
        image: potluck,
        link: ""
    },
    {
        id: 2,
        title: "Youth Fellowship Night",
        date: "2024-07-18",
        time: "6:30 PM",
        location: "Youth Hall",
        description: "An engaging evening for our youth to connect, share, and worship together.",
        image: potluck,
        link: ""
    },
    {
        id: 3,
        title: "Community Outreach",
        date: "2024-07-22",
        time: "2:00 PM",
        location: "Local Community Center",
        description: "Help us spread love and support to those in need in our community.",
        image: potluck,
        link: ""
    },
    {
        id: 4,
        title: "Prayer & Worship Night",
        date: "2024-07-25",
        time: "7:00 PM",
        location: "Chapel",
        description: "A night dedicated to prayer, reflection, and uplifting worship music.",
        image: potluck,
        link: ""
    },
    {
        id: 5,
        title: "Bible Study Series",
        date: "2024-07-28",
        time: "5:00 PM",
        location: "Room 101",
        description: "Dive deep into scripture with our weekly interactive Bible study sessions.",
        image: potluck,
        link: ""
    }
];

interface FundChurch {
    id: number;
    title: string;
    description: string;
    image: any;
    link: string;
    days: string;
    amountRaised: string;
    goalAmount: string;
}[];

export const fundChurch: FundChurch[] = [
    {
        id: 1,
        title: "General Tithes and Offerings",
        description: "Support the overall mission and operations of the church through your tithes and offerings.",
        image: potluck,
        link: "",
        days: "45 days left",
        amountRaised: "$12,450",
        goalAmount: "$20,000"
    },
    {
        id: 2,
        title: "Building Fund",
        description: "Contribute to the construction and maintenance of our church facilities for a growing congregation.",
        image: potluck,
        link: "",
        days: "60 days left",
        amountRaised: "$8,750",
        goalAmount: "$15,000"
    },
    {
        id: 3,
        title: "Youth Ministry Support",
        description: "Help fund youth programs, activities, and events to nurture the next generation in faith.",
        image: potluck,
        link: "",
        days: "30 days left",
        amountRaised: "$5,200",
        goalAmount: "$10,000"
    },
    {
        id: 4,
        title: "Community Outreach",
        description: "Provide resources for feeding programs, local aid, and outreach initiatives in our community.",
        image: potluck,
        link: "",
        days: "25 days left",
        amountRaised: "$6,800",
        goalAmount: "$12,000"
    },
    {
        id: 5,
        title: "Mission Trips",
        description: "Support missionaries and short-term mission trips that bring hope to communities worldwide.",
        image: potluck,
        link: "",
        days: "50 days left",
        amountRaised: "$3,900",
        goalAmount: "$8,000"
    },
    {
        id: 6,
        title: "Music & Worship Ministry",
        description: "Help fund instruments, worship equipment, and choir programs for vibrant worship experiences.",
        image: potluck,
        link: "",
        days: "40 days left",
        amountRaised: "$4,500",
        goalAmount: "$9,000"
    }
];

interface QuickLink {
    id: number;
    title: string;
    link: string;
    text: string;
    icon: IconType;
}[];

export const quickLinks: QuickLink[] = [
    {
        id: 1,
        title: 'New? Start Here',
        link: '',
        text: 'Learn more',
        icon: BiDirections
    },
    {
        id: 2,
        title: 'Prayer Requests',
        link: '',
        text: 'Get help',
        icon: FaPray
    },
    {
        id: 3,
        title: 'Need ride to church?',
        link: '',
        text: 'Request ride',
        icon: LuBus
    },
    {
        id: 4,
        title: 'Become a volunteer',
        link: '',
        text: 'Learn more',
        icon: MdOutlineVolunteerActivism
    }
]

export const coreMinistries = [
    {
        id: 1,
        title: 'Children',
        desc: 'King\'s Seeds',
        image: band
    },
    {
        id: 2,
        title: 'Youths',
        desc: 'Game Changers',
        image: band
    },
    {
        id: 3,
        title: 'Families',
        desc: 'Unique Married',
        image: band
    },
    {
        id: 4,
        title: 'Men',
        desc: 'Men of Valour',
        image: band
    },
    {
        id: 5,
        title: 'Women',
        desc: 'Women of Faith',
        image: band
    }
]

export const newGuide = {
    title: 'The Regina newcomer\'s handbook by HOPP',
    header: 'Your Guide to a Smooth Start in Regina',
    desc: 'Starting fresh in a new city can feel overwhelming, but this handbook is here to make your transition easier. Packed with practical tips, it helps you navigate life in Regina—from finding childcare and job opportunities to accessing community services and local resources. Consider it your go-to guide for everything you need to settle confidently and thrive in your new home.',
    link: '',
    img: handbook,
    text: 'Download Handbook'
}

interface Community {
    header: string;
    desc: string;
    initiatives: {
        id: number;
        title: string;
        description: string;
        img: any;
    }[];
}

export const community: Community = {
    header: 'Our Community Initiatives',
    desc: 'At House of Peace Parish, we are deeply committed to making a positive impact in our local and global communities through various outreach programs and initiatives.',
    initiatives: [
        {
            id: 1,
            title: 'Feeding the Homeless',
            description: 'Regular outreach programs to provide meals and essential supplies to homeless individuals in our city.',
            img: handbook
        },
        {
            id: 2, 
            title: 'Educational Support',
            description: 'Scholarship programs and tutoring services for underprivileged children to help them succeed academically.',
            img: handbook
        },
        {
            id: 3,
            title: 'Health Clinics',
            description: 'Organizing free health check-up camps and awareness programs to promote wellness in our community.',
            img: handbook
        }
    ]
}


export const testimonies = [
  {
    id: 1,
    name: 'Jane Doe',
    testimony: 'Joining House of Peace Parish has been a transformative experience for me. The community is so welcoming, and I have grown so much in my faith.',
  },
  {
    id: 2,
    name: 'Michael Smith',
    testimony: 'I never imagined feeling so connected in a new city. The church programs have helped me build lasting friendships and strengthened my spiritual journey.',
  },
  {
    id: 3,
    name: 'Aisha Khan',
    testimony: 'The warmth and support I received here made settling into Regina so much easier. I feel truly part of a caring family.',
  },
  {
    id: 4,
    name: 'David Lee',
    testimony: 'Being part of this parish has inspired me to give back to the community. The encouragement and guidance I’ve received are invaluable.',
  },
  {
    id: 5,
    name: 'Maria Hernandez',
    testimony: 'From worship services to volunteer opportunities, every experience at House of Peace Parish has deepened my faith and enriched my life.',
  }
];

interface Connect {
    id: number;
    title: string;
    header: string;
    text: string;
    image: string;
    link: string;
}[];

export const connectLink: Connect[] = [
    {
        id: 1,
        title: 'Join a Small Group',
        header: 'Connect and Grow Together',
        text: 'Connect now',
        image: '',
        link: ''
    },
    {
        id: 2,
        title: 'Volunteer Opportunities',
        header: 'Serve with Us',
        text: 'Get involved',
        image: '',
        link: ''
    }
]