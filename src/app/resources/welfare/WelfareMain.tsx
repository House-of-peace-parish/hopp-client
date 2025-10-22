import React from 'react'

function WelfareMain() {
    return (
        <div>
            <div>
                <h3>Do you need a ride to church ?</h3>
                <p>kindly feel the form below</p>
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
                            <label htmlFor="requestTitle">Select a date</label>
                            <input id="requestTitle" type="date" placeholder="Location address" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="">Your pickup address</label>
                        <input type="text" placeholder='Your pickup address' />
                    </div>
                </div>
                <div>
                    <button>Book ride</button>
                </div>
            </form>
        </div>
    )
}

export default WelfareMain