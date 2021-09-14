import React from "react";



export default function Friend(props) {
    const { info } = props

    return (
        <div>
            <h2>{info.username}</h2>
            <p>Email: {info.email}</p>
            <p>Programming Skill: {info.role}</p>
        </div>
    )
}