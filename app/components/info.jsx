'use client'

import { useState } from "react"
import styles from './info.module.css'
import { Roll } from "react-awesome-reveal"
import { FiInfo } from "react-icons/fi"
import { AttentionSeeker } from "react-awesome-reveal"


export default function InfoBox(){
    
    const [showInfo, setShowInfo] = useState(false)

    function toggleInfoBox(){
        setShowInfo(!showInfo)
    }

    return(
       <>
       
            <aside onMouseEnter={toggleInfoBox} onMouseLeave={toggleInfoBox} >
                <AttentionSeeker effect={"heartBeat"} >
                <FiInfo className={styles.infoLogo} size={32} />
                </AttentionSeeker>
            </aside> 
       
       
        
        <Roll className={ showInfo ? styles.InfoBox: styles.InfoBoxHidden }>
            <article >
                Info on Space project
            </article>
        </Roll> 
       </>
    )

}

