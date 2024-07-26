import React, { useContext, useState } from 'react'
import { Context } from '../../context/Context'
import { FaPeopleGroup } from "react-icons/fa6";
import { LuTimerOff } from "react-icons/lu";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaUserTimes } from "react-icons/fa";

const Aside = () => {
    const { setCategory } = useContext(Context)

    const [fourCat, setFourCat] = useState({
        popular: true,
        latest: false,
        oldest: false,
        leastP: false
    })

    return (
        <aside>
            <ul>
                <li className={fourCat.popular === true ? 'underLineCSS' : "CSSDefault"} onClick={() => { setCategory('popular'), setFourCat({ ...fourCat, popular: true, latest: false, oldest: false, leastP: false }) }}>
                    <FaPeopleGroup /><span >Popular</span>
                </li>

                <li className={fourCat.latest === true ? 'underLineCSS' : 'CSSDefault'} onClick={() => { setCategory('latest'), setFourCat({ ...fourCat, latest: true, popular: false, oldest: false, leastP: false }) }}>
                    <MdOutlineAccessTime /> <span >Latest</span>
                </li>

                <li className={fourCat.oldest === true ? 'underLineCSS' : 'CSSDefault'} onClick={() => { setCategory('oldest'), setFourCat({ ...fourCat, oldest: true, latest: false, popular: false, leastP: false }) }}>
                    <LuTimerOff /><span>Oldest</span>
                </li>

                <li className={fourCat.leastP === true ? 'underLineCSS' : 'CSSDefault'} onClick={() => { setCategory('leastPopular'), setFourCat({ ...fourCat, leastP: true, latest: false, oldest: false, popular: false }) }}>
                    <FaUserTimes /><span>Least Popular</span>
                </li>
            </ul>
        </aside>
    )
}

export default Aside
