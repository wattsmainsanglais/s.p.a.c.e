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
            <article className={styles.infoboxArticle} >
                S.P.A.C.E. is an NFT collection created by Applerust of PocketTowne. The collection is made up of 182 unique art pieces.
                Each NFT - with individual stats and traits -  is designed to be a playable character in the Brawlbot game designed by the PocketTowne team. 
                <br /><br />
                All V1 pieces have now been minted but please check out the <a href='https://www.jpg.store/collection/space?tab=activity'>JPG store</a> where NFT's can be purchased on the secondary market. Plus keep a eye out for S.P.A.C.E V2.
                <br /><br />
                To get more info on how to enter your NFT into the Brawlbot, please visit pockettowne.io or join the pockettowne discord server.
                
            
            
            </article>
        </Roll> 
       </>
    )

}

