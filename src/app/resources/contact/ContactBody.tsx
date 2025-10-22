import React from 'react'

function ContactBody() {
    return (
        <div>
            <div>
                <h3>Send us a message</h3>
                <p>Can’t find what you’re looking for? Need help? Feel free to send us a message.</p>
            </div>

            <form action="">
                <div>
                    <div>
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <input id="firstName" type="text" placeholder="First name" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <input id="lastName" type="text" placeholder="Last name" />
                        </div>
                    </div>
                    <div>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input id="email" type="email" placeholder="Email address" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="requestTitle">Your contact address</label>
                            <input id="requestTitle" type="text" placeholder="+1 (xxx)-xxx-xxxx" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="">Enter your message below</label>
                        <textarea name="" id="" placeholder='Your Message'></textarea>
                    </div>
                </div>
                <div>
                    <button>Send Message</button>
                </div>
            </form>
        </div>
    )
}

export default ContactBody