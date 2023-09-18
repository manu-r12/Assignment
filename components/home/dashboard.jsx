import React, { useContext, useEffect, useState } from 'react'
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import styles from './home.module.css'
import SidebarMenuLinks from '@/components/sidebarMenu-links/sidebarMenuLinks';
import Header from '@/components/header/header';
import Analytics from '@/components/analytics/analyticsContainer';
import BarChart from '@/components/activitiesBarChart/BarChart';
import TopProduct from '@/components/topProductsPieChart/topProducts';
import AddProfile from '@/components/addProfile/addProflie';
import PopUpBox from '@/components/addProfile/popUpBox';
import { USER_ACTION_TYPES, UserContext } from '@/context/AddNewProfile';
import { createAction } from '@/context/CreateAnAction';

import WidgetsIcon from '@mui/icons-material/Widgets';
import { Menu } from '@mui/icons-material';
const Home = () => {

    const [isClient, setIsClient] = useState(false)
    const [menu, opneMenu] = useState(false)
    const [isMobile , setIsMobile] = useState(false)
    const {value , dispatch} = useContext(UserContext)






        const [windowDimensions, setWindowDimensions] = useState({
            width: 0,
            height: 0,
          });
        
      
     
    
          useEffect(() => {
            if (typeof window !== 'undefined') {
               
                function handleResize() {
                  setWindowDimensions({
                    width: window.innerWidth,
                    height: window.innerHeight,
                  });
                }
               
                // Add event listener for window resize
                window.addEventListener('resize', handleResize);
          
                if(windowDimensions.width < 1170){
                    opneMenu(false)
                
                }else{
                    opneMenu(false)
                    
                }
                if(windowDimensions.width < 440){
                  setIsMobile(true)
              
              }else{
                  setIsMobile(false)
                  
              }
                return () => {
                  window.removeEventListener('resize', handleResize);
                };

                
              }
          }, [windowDimensions.width]);
       
         
     
 
        useEffect(() => {
          setIsClient(true)
        }, [])
       
    const handleClick = () =>{
            dispatch(createAction(USER_ACTION_TYPES.OPEN_POPUP_BOX, !value.isPopUpOpen))
    }

  return (

   
    <section>

     
    <div className={styles.mainContianer} >

            {value.isPopUpOpen && <PopUpBox/> }
            {value.isPopUpOpen && <div onClick={handleClick} className={styles.dark}/>}
                <div className={styles.dashboardContainer}>
                    <div className={styles.centerContainer}>
                            <div className={!menu ? `${styles.navigationSideBar}` : `${styles.navigationSideBarMedium}` }>
                                <div className={styles.navigationSideBarItems}>
                                <h1 className={styles.title1}>Board.</h1>  
                                <div className={styles.navigationMenus}>
                                    <div><SidebarMenuLinks/></div> 
                                </div>
                                </div>
                                
                            </div>
                            <div className={styles.overview}>
                                <div className={styles.overviewInsideContainer}>
                                    <Header/>
                                    <Analytics/>
                                    <BarChart/>
                                    <div className={styles.bottomContainer}>
                                        {isClient ? <TopProduct/> : <h1>Loading...</h1>}
                                        <AddProfile/>
                                    </div>
                                </div>
                            </div>
                    </div> </div></div>

       
          <div className={styles.overviewMobileView}>
          {menu && <div  onClick={() => opneMenu(false)} className={styles.dark}/>}
          {value.isPopUpOpen && <PopUpBox/> }
            {value.isPopUpOpen && <div onClick={handleClick} className={styles.dark}/>}
          <div onClick={() => opneMenu(!menu)} className={styles.menuBar}><Menu fontSize='medium'/></div>
          <div className={!menu ? `${styles.navigationSideBar}` : `${styles.navigationSideBarMedium}` }>
                                <div className={styles.navigationSideBarItems}>
                                <h1 className={styles.title1}>Board.</h1>  
                                <div className={styles.navigationMenus}>
                                    <div><SidebarMenuLinks/></div> 
                                </div>
                                </div>
                                
                            </div>

                                <div className={styles.overviewInsideContaineroverviewMobileView}>
                                    <Header/>
                                    <Analytics/>
                                    <BarChart/>
                                    <div className={styles.bottomContaineroverviewMobileView}>
                                        {isClient ? <TopProduct/> : <h1>Loading...</h1>}
                                        <AddProfile/>
                                    </div>
                                </div>
                            </div>
        

    </section> 
    
    
    
   
   
  )
}

export default Home