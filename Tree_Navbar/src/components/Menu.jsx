import React from 'react'
import MenuList from './MenuList'

const Menu = ({menu = []}) => {
    return (
        <div>
            <MenuList list={menu} />
        </div>
    )
}

export default Menu
