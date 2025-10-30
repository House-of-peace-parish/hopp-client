import { IconType } from 'react-icons';
import { BiDirections } from 'react-icons/bi';
import { FaPray } from 'react-icons/fa';
import { LuBus } from 'react-icons/lu';
import { MdOutlineVolunteerActivism } from 'react-icons/md';

import potluck from '../assets/landPage/potluck.jpg';
import handbook from '../assets/landPage/handbook.jpg'

import event1 from '../assets/event/event1.jpg'
import event2 from '../assets/event/event2.jpg'
import event3 from '../assets/event/event3.jpg'
import event4 from '../assets/event/event4.jpg'
import event5 from '../assets/event/event5.jpg'

import seed from '../assets/gallery/seed.jpg'
import youth from '../assets/gallery/youth.jpg'
import families from '../assets/gallery/families.jpg'
import men from '../assets/gallery/men.jpg'
import women from '../assets/gallery/women.jpg'

import car1 from '../assets/Home/Car1.jpg'
import car2 from '../assets/Home/Car2.jpg'
import car3 from '../assets/Home/Car3.jpg'
import car4 from '../assets/Home/Car4.jpg'
import car5 from '../assets/Home/Car5.jpg'
import car6 from '../assets/Home/Car6.jpg'

interface LandCarousel {
    id: number;
    image: any;
}

export const landHeadCarousel: LandCarousel[] = [
    {
        id: 1,
        image: car1
    },
    {
        id: 2,
        image: car2
    },
    {
        id: 3,
        image: car3
    },
    {
        id: 4,
        image: car4
    },
    {
        id: 5,
        image: car5
    },
    {
        id: 6,
        image: car6
    },
]

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
        date: "Sun, Oct 5",
        time: "09:30 AM",
        location: "1042 Albert st, Regina, Sk",
        description: "Join us for a special thanksgiving service to celebrate God's blessings.",
        image: event1,
        link: ""
    },
    {
        id: 2,
        title: "Digging Deep",
        date: "Every Wednesday",
        time: "07:30 PM",
        location: "1042 Albert st, Regina, Sk",
        description: "An engaging evening for our youth to connect, share, and worship together.",
        image: event2,
        link: ""
    },
    {
        id: 3,
        title: "Sunday Service",
        date: "Every Sunday",
        time: "09:30 AM",
        location: "1042 Albert st, Regina, Sk",
        description: "Let us go to His dwelling place; Let us worship at His footstool - Psalm 132:7.",
        image: event3,
        link: ""
    },
    {
        id: 4,
        title: "Prayer & Worship Night",
        date: "2024-07-25",
        time: "7:00 PM",
        location: "Chapel",
        description: "A night dedicated to prayer, reflection, and uplifting worship music.",
        image: event4,
        link: ""
    },
    {
        id: 5,
        title: "Bible Study Series",
        date: "2024-07-28",
        time: "5:00 PM",
        location: "Room 101",
        description: "Dive deep into scripture with our weekly interactive Bible study sessions.",
        image: event5,
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
        link: '/newHere',
        text: 'Learn more',
        icon: BiDirections
    },
    {
        id: 2,
        title: 'Prayer Requests',
        link: '/resources/prayer',
        text: 'Get help',
        icon: FaPray
    },
    {
        id: 3,
        title: 'Need ride to church?',
        link: '/resources/welfare',
        text: 'Request ride',
        icon: LuBus
    },
    {
        id: 4,
        title: 'Become a volunteer',
        link: '/resources/welfare',
        text: 'Learn more',
        icon: MdOutlineVolunteerActivism
    }
]

export const coreMinistries = [
    {
        id: 1,
        title: 'Children',
        desc: 'King\'s Seeds',
        image: seed
    },
    {
        id: 2,
        title: 'Youths',
        desc: 'Game Changers',
        image: youth
    },
    {
        id: 3,
        title: 'Families',
        desc: 'Unique Married',
        image: families
    },
    {
        id: 4,
        title: 'Men',
        desc: 'Men of Valour',
        image: men
    },
    {
        id: 5,
        title: 'Women',
        desc: 'Women of Faith',
        image: women
    }
]

export const newGuide = {
    title: 'The Regina newcomer\'s handbook by HOPP',
    header: 'Your Guide to a Smooth Start in Regina',
    desc: 'Starting fresh in a new city can feel overwhelming, but this handbook is here to make your transition easier. Packed with practical tips, it helps you navigate life in Regina—from finding childcare and job opportunities to accessing community services and local resources. Consider it your go-to guide for everything you need to settle confidently and thrive in your new home.',
    link: 'https://www.regina.ca/about-regina/moving-to-regina/ ',
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
    },
    {
      id: 4,
      title: 'Environmental Initiatives',
      description: 'Community clean-up drives, tree planting activities, and environmental awareness campaigns to promote sustainability.',
      img: handbook
    },
    {
      id: 5,
      title: 'Youth Empowerment',
      description: 'Workshops, mentorship, and skill-building programs to empower the youth and encourage leadership in the community.',
      img: handbook
    },
    {
      id: 6,
      title: 'Senior Care Support',
      description: 'Visiting elderly members of the community, providing companionship, and helping with essential needs.',
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
        link: '/resources/prayer'
    },
    {
        id: 2,
        title: 'Volunteer Opportunities',
        header: 'Serve with Us',
        text: 'Get involved',
        image: '',
        link: '/resources/welfare'
    }
]

export interface GivingOption {
  id: number;
  title: string;
  description: string;
  email?: string;
  note?: string;
}


export const givingOptions: GivingOption[] = [
  {
    id: 1,
    title: "Offerings",
    description: "You can give your offering through Interac eTransfer:",
    email: "rccg.hop@yahoo.com"
  },
  {
    id: 2,
    title: "Tithes",
    description: "You can pay your tithes through Interac eTransfer:",
    email: "rccg.hop@yahoo.com"
  },
  {
    id: 3,
    title: "Church Building Project",
    description: "You can contribute to the church building project through Interac eTransfer:",
    email: "rccghofpeace@gmail.com"
  },
  {
    id: 4,
    title: "Disclaimer",
    description: "Kindly note: Currently, all giving is through Interac eTransfer or in-person during service. No giving is done directly through the website."
  }
];
