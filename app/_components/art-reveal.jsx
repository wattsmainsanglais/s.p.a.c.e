'use client'
 
import React from "react";
import Image from "next/image";
import styles from '../page.module.css'
import { Zoom } from "react-awesome-reveal";



export default function ArtBox({src, alt}){

    return(
       <Zoom>
        
        <Image
            className={styles.nftImage}
            src={src}
           
            alt = {alt}
            style={{
                maxWidth: '90%',
                height: 'auto'
            }
                
            } 
            />
       </Zoom> 
    )
}