import { quickLinks } from '@/data/landbody'
import React from 'react'

function QuickLink() {
    return (
        <div>
            {
                quickLinks.map(({ id, title, link, text, icon: Icon }) => (
                    <div key={id}>
                        <Icon size={24} />
                        <h4>{title}</h4>
                        <a href={link}>{text}</a>
                    </div>
                ))
            }
        </div>
    )
}

export default QuickLink