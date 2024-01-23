'use client'

import { useState } from "react"
import styles from './info.module.css'
import { Roll } from "react-awesome-reveal"
import { FiInfo } from "react-icons/fi"


export default function InfoBox(){
    
    const [showInfo, setShowInfo] = useState(false)

    function toggleInfoBox(){
        setShowInfo(!showInfo)
    }

    return(
       <>
       <aside onMouseEnter={toggleInfoBox} onMouseLeave={toggleInfoBox} >
        <FiInfo size={32} />
       </aside> 
        
        <Roll className={ showInfo ? styles.InfoBox: styles.InfoBoxHidden }>
            <article >
                Info on Space project
            </article>
        </Roll> 
       </>
    )

}

