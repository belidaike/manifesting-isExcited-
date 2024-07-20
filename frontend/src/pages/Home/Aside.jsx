import React, { useContext } from 'react'
import { Context } from '../../context/Context'
import { FaPeopleGroup } from "react-icons/fa6";
import { LuTimerOff } from "react-icons/lu";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaUserTimes } from "react-icons/fa";

const Aside = () => {
    const { setCategory } = useContext(Context)

    return (
        <aside>
            <ul>
                <li onClick={() => setCategory('popular')}>
                    <FaPeopleGroup /><span>Popular</span></li>
                <li onClick={() => setCategory('latest')}>
                    <MdOutlineAccessTime /> <span>Latest</span>
                </li>
                <li onClick={() => setCategory('oldest')}>
                    <LuTimerOff /><span>Oldest</span>
                </li>
                <li onClick={() => setCategory('leastPopular')}>
                    <FaUserTimes /><span>Least Popular</span>
                </li>
            </ul>
        </aside>
    )
}

export default Aside
