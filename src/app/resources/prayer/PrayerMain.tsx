import React from 'react'

function PrayerMain() {
    return (
        <div>
            <div>
                <h3>Send us a Request</h3>
                <p>Please complete the prayer request form and your prayer request will be delivered to our prayer team. We are here to share your burden and intercede on your behalf.</p>
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
                            <label htmlFor="requestTitle">Prayer Request Title</label>
                            <input id="requestTitle" type="text" placeholder="Prayer request title" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="">Enter your prayer request below </label>
                        <textarea name="" id="" placeholder='Please be more specific so that we may assist you more quickly.'></textarea>
                    </div>
                </div>
                <div>
                    <button>Send Message</button>
                </div>
            </form>
        </div>
    )
}

export default PrayerMain