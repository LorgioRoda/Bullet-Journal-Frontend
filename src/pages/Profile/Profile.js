import { render } from '@testing-library/react'
import React from 'react'
import {withAuth} from "../../context/auth.context" 

export default function Profile() {
    render()
    return (
        <div>
            hola
            console.log(this.props.user)       
        </div>
    )
}
