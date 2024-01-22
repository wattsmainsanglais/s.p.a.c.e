'use client'
 
import Image from "next/image";
import styles from '../page.module.css'
import { Zoom } from "react-awesome-reveal";



export default function ArtBox({src, alt}){

    return(
       <Zoom>
        <Image
            className={styles.nftImage}
            src={src}
            width={300}
            height={300}
            alt = {alt} />
       </Zoom> 
    )
}