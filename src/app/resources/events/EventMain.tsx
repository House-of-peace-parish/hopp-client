import { upcomingEvents } from '@/data/landbody';
import Image from 'next/image';
import React from 'react';
import { AiOutlineSearch, AiOutlineFilter } from 'react-icons/ai';

function EventMain() {
    return (
        <div>
            <div>
                <div>
                    <AiOutlineSearch size={20} />
                    <input type="text" placeholder='Search for events' />
                </div>
                <div>
                    <button>Find events</button>
                    <div>
                        <AiOutlineFilter size={20} />
                        <span>Filter</span>
                    </div>
                </div>
            </div>

            <div>
                <div>
                    <h3>Upcoming Events</h3>
                    <div>
                        {
                            upcomingEvents.map((item) => (
                                <div>
                                    <div>
                                        <Image src={item.image} alt="" />
                                    </div>
                                    <div>
                                        <h4>{item.title}</h4>
                                        <p>{item.date} | {item.time}</p>
                                        <p>{item.location}</p>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div>
                    <h3>Past Events</h3>
                    <div>
                        {
                            upcomingEvents.map((item) => (
                                <div>
                                    <div>
                                        <Image src={item.image} alt="" />
                                    </div>
                                    <div>
                                        <h4>{item.title}</h4>
                                        <p>{item.date} | {item.time}</p>
                                        <p>{item.location}</p>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventMain