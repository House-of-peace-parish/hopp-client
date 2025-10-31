import prayerImg from '../assets/ministries/prayer.jpg';
import sundaySchoolImg from '../assets/ministries/sundaySchool.jpg';
import choirImg from '../assets/ministries/choir.jpg';
import mediaImg from '../assets/ministries/media.jpg';
import usheringImg from '../assets/ministries/usher.jpg';
import technicalImg from '../assets/ministries/technical.jpg';
import sanctuaryImg from '../assets/ministries/sanctuary.jpg';
import welfareImg from '../assets/ministries/welfare.jpg';
import evangelismImg from '../assets/ministries/donate.jpg';

export interface Ministry {
    id: number;
    title: string;
    description: string;
    image: any;
}

export const ministries: Ministry[] = [
    {
        id: 1,
        title: "Prayer Band",
        description:
            "At the heart of our church is prayer. The Prayer Band Ministry stands in the gap for our members, community, and nation. Together, we seek God’s guidance, power, and presence through regular prayer meetings, intercessions, and vigils.",
        image: prayerImg
    },
    {
        id: 2,
        title: "Sunday School Ministry",
        description:
            "Our Sunday School helps believers of all ages grow in their faith and understanding of God’s Word. Through interactive teaching and open discussions, we learn how to apply biblical principles to our daily lives.",
        image: sundaySchoolImg
    },
    {
        id: 3,
        title: "Choir Ministry",
        description:
            "The Choir leads us into God’s presence through songs of praise and worship. With joyful hearts and spirit-filled music, they help the congregation connect deeply with God during every service.",
        image: choirImg
    },
    {
        id: 4,
        title: "Media Ministry",
        description:
            "The Media Ministry shares the message of Christ through technology. From managing church recordings to livestreaming and digital content, this team ensures the Word of God reaches people within and beyond our walls.",
        image: mediaImg
    },
    {
        id: 5,
        title: "Ushering Ministry",
        description:
            "Our ushers are the friendly faces that welcome everyone into God’s house. They help maintain order, assist worshippers, and ensure each service runs smoothly in a warm and peaceful atmosphere.",
        image: usheringImg
    },
    {
        id: 6,
        title: "Technical Ministry",
        description:
            "Behind every clear sound and smooth service is our Technical Team. They operate and maintain the church’s sound, lighting, and multimedia systems to support excellent worship experiences.",
        image: technicalImg
    },
    {
        id: 7,
        title: "Sanctuary Workers Ministry",
        description:
            "The Sanctuary Workers lovingly care for the church environment. They keep God’s house clean, orderly, and beautiful, creating a welcoming and reverent atmosphere for worship.",
        image: sanctuaryImg
    },
    {
        id: 8,
        title: "Welfare Ministry",
        description:
            "The Welfare Ministry extends the love of Christ through practical care and compassion. They provide support to members in times of need and celebrate with them in seasons of joy, reflecting the heart of a true church family.",
        image: welfareImg
    },
    {
        id: 9,
        title: "Follow-Up & Evangelism Ministry",
        description:
            "This team is passionate about reaching the lost and nurturing new believers. Through outreach, visitations, and discipleship, they ensure every soul is cared for and established in their walk with God.",
        image: evangelismImg
    }
];