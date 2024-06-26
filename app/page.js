import Image from 'next/image'
import styles from './page.module.css'


import ArtBox from './_components/art-reveal'
import Lore from './_components/lore'
import InfoBox from './_components/info'
import discordLogo from '../public/images/discord_white.svg'
import SpaceLogo from '../public/images/S.P.A.C.E.04.png'

import Starfield from './_components/starfield'

//images
import One from '../public/images/1_005.png'
import Two from '../public/images/3_009Blue.png'
import Three from '../public/images/3_014Purple.png'
import Four from '../public/images/006Purple.png'

export default function Home() {

 


  return (
    <>
      <nav className={styles.navBar}>
        <section className={styles.navWrapper}>
          <InfoBox />
          <a className={styles.mintTag} href='https://www.jpg.store/collection/space?tab=items' target='_blank'><h2>BUY</h2></a>
          <a className={styles.mintTag} href='https://discord.com/channels/851965221929091113/918871571098124309' target= '_blank'>
            <Image
            src={discordLogo}
            width={48}
            style={{
              maxWidth: '100%'
            }}
            
            alt='Discord logo, link to PocketTowne discord server' 
            />

          </a>
        </section>
      </nav>
      
      <main className={styles.main}>
        <Image
         className={styles.spaceLogo}
         src={SpaceLogo}
         style={{
          maxWidth: '600px',
          width:'95%',
          height: 'auto'
         }}
         alt='Image Logo'
         />
      
        <section className={styles.nftGallery}>
          
          <ArtBox src={One} alt='nft image' />
          <ArtBox src={Two} alt='nft image'/>
          <ArtBox src={Three} />
          <ArtBox src={Four} />

    
        </section>

        <section className={styles.loreWrapper}>
          <Lore/>
        </section>
        
        <Starfield/>
        
      </main>
      </>
  )
}
