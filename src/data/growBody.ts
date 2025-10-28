import kids from '../assets/grow/kids.jpg';
import male from '../assets/grow/male.jpg'
import female from '../assets/grow/female.jpg'
import families from '../assets/gallery/families.jpg'
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
    title: 'Unique Teenagers',
    header1: 'Who we are',
    para1: `Unique Teenagers is a vibrant and inclusive Christian youth group dedicated to empowering teenagers to embrace their unique identity in Christ.
With a passionate team of dedicated young leaders, the group has created an environment where young teens can explore their faith, connect with others, and
grow in their relationship with God.`,
    header2: 'Our Vision',
    image: families,
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

export const meetPastor = {
    header: 'Meet Our Pastors',
    title: 'Helping us grow the Youth Ministry are these amazing pastors and leaders', 
    pastors: [
        {
            id: 1,
            name: 'Pastor John Doe',
            role: 'Youth Pastor',
            bio: 'Pastor John has been leading the youth ministry for over a decade, inspiring young hearts to embrace their faith and live purposefully.',
            image: male
        },
        {
            id: 2,
            name: 'Sarah Smith',
            role: 'Youth Leader',
            bio: 'Sarah is passionate about mentoring teenagers and creating a supportive community where they can thrive spiritually and socially.',
            image: female
        }
    ]
};