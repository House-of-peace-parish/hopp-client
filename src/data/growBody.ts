import kids from '../assets/grow/kids.jpg';
import male from '../assets/grow/male.jpg'
import female from '../assets/grow/female.jpg'
import car3 from '../assets/Home/Car3.jpg'
import youthP from '../assets/gallery/youthP.jpg'

interface TeenVision {
    id: number;
    goal: string;
    scripture: string;
}

interface Teen {
    title: string;
    header1: string;
    para1: string;
    header2: string;
    image: any;
    para2: TeenVision[];
}

export const teen: Teen = {
    title: 'HOP Teens',
    header1: 'Who we are',
    para1: `Unique Teenagers is a vibrant and inclusive Christian youth group dedicated to empowering teenagers to embrace their unique identity in Christ.
With a passionate team of dedicated young leaders, the group has created an environment where young teens can explore their faith, connect with others, and
grow in their relationship with God.`,
    header2: 'Our Vision',
    image: car3,
    para2: [
        {
            id: 1,
            goal: "To help teenagers understand that they are UNIQUE and different from others.",
            scripture: "Romans 12:4"
        },
        {
            id: 2,
            goal: "To help teenagers successfully pass through changes with the help of the Holy Spirit.",
            scripture: ""
        },
        {
            id: 3,
            goal: "To teach teenagers that they are complete in Christ.",
            scripture: "Colossians 2:10"
        },
        {
            id: 4,
            goal: "To ensure that the teenagers understand they are the light of the world.",
            scripture: "Matthew 5:14–16"
        },
        {
            id: 5,
            goal: "To help teenagers understand their identity in Christ.",
            scripture: "Galatians 1:27"
        }
    ]
}

interface Youth {
    title: string;
    header: string;
    image: any;
    para: string;
    para2: string;
    para3: string;
    para4: string;
}

export const youth: Youth = {
    title: 'Youth Fellowship',
    header: 'Join our Youth Fellowship',
    image: youthP,
    para: `Our Youth Fellowship is a dynamic and engaging community designed to nurture the spiritual growth and development of young individuals.
    It serves as a platform for youth to connect, learn, and grow in their faith while building meaningful relationships with peers who share similar values and beliefs.`,
    para2: 'ABIDE is a monthly altar of study, worship, prayer, fun and fellowship. Join other young adults on ZOOM every 2nd Tuesday of the month.',
    para3: 'YOUTH WORSHIP NIGHT is a vibrant and energetic gathering that brings together young individuals for an evening of uplifting worship, inspiring messages, and meaningful fellowship. Held on the last Friday of every month, this event is designed to create a dynamic and engaging atmosphere where youth can connect with God and each other in a powerful way.',
    para4: 'YOUTH BIBLE STUDY is a weekly gathering that provides young individuals with an opportunity to delve deeper into the teachings of the Bible, explore their faith, and build a strong foundation for their spiritual journey. Held every Wednesday evening, this event is designed to create an interactive and engaging environment where youth can learn, discuss, and grow together in their understanding of scripture.'
}

export interface MeetData {
    header: string;
    pastors: {
        id: number;
        bio: string;
    }[]
}

export const meetPastor: MeetData = {
    header: 'Growth for Teens',
    pastors: [
        {
            id: 1,
            bio: 'Our dedicated Sunday School section for teens helps them grow in Christ. Join Sunday School every Sunday by 9:30am CST.',
        },
        {
            id: 2,
            bio: 'Our Midweek Service is held every Wednesday evening. Join us every Wednesday by 7:30pm CST to reflect on the Word, ask questions, have a discussion and grow together as a community.',
        }
    ]
};
export const meetPastor2: MeetData = {
    header: 'Growth for Youths',
    pastors: [
        {
            id: 1,
            bio: 'Your Sunday Service is not complete without Sunday School. Sunday School starts by 9:30am CST every Sunday and is a chance to experience growth through discussions guided by the RCCG Sunday School manual',
        },
        {
            id: 2,
            bio: 'Join us every Wednesday evening by 7:30pm CST for our Midweek Service. It is an opportunity to study the Word, meditate, ask questions, have a discussion and grow together as a community.',
        }
    ]
};