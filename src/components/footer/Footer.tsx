import { footerLinks } from '@/data/footer'
import React from 'react'

function Footer() {
  return (
    <div>
        <div>
            <div>
                <h3>Subscribe To Our Newsletter</h3>
                <form action="">
                    <div>
                        <input type="text" placeholder='Enter your Full name' />
                        <input type="email" placeholder='Enter your email address' />
                    </div>
                    <button>Subscribe</button>
                </form>
            </div>
        </div>
        <div>
            {
                footerLinks.map(({ id, title, list, icon: Icon, link }) => (
                    <div key={id}>
                        <div>
                            <Icon size={28} />
                            <h3>{title}</h3>
                        </div>
                        <div>
                            {
                                list.map(({ id, header, text }) => (
                                    <div key={id}>
                                        <h4>{header}</h4>
                                        <p>{text}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
        <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5079.742883145522!2d-104.61863489999999!3d50.462118600000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x531c1e596a0128e9%3A0x3dc7265818117213!2s1042%20Albert%20St%2C%20Regina%2C%20SK%20S4R%202P8!5e0!3m2!1sen!2sca!4v1761075967731!5m2!1sen!2sca" height="450" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div>
            <p>&copy; All right reserved 2025 House Of Peace Parish</p>
        </div>
    </div>
  )
}

export default Footer