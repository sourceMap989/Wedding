import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './PhotoAlbumDesktop.css';
import Carousal from './Carousal';
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";


function PhotoAlbumDesktop() {
    const [selectedTab, setSelectedTab] = useState(0);
    const tab1Images = [image1, image2, image3, image4, image5];
    const tab2Images = [ image2, image3, image4, image5];
    const tab3Images = [image3,image4, image5];
    const handleTabSelect = (index) => {
      setSelectedTab(index);
    };
    return (
        <>
        <h1>PHOTO ALBUM</h1>
      <Tabs selectedIndex={selectedTab} onSelect={handleTabSelect}>
        <TabList>
          <Tab>Engagement</Tab>
          <Tab>Prewedding Shoot</Tab>
          <Tab>Relatives</Tab>
        </TabList>
  
        <TabPanel>
          <Carousal images={tab1Images}/>
        </TabPanel>
        <TabPanel>
          <Carousal images={tab2Images}/>
        </TabPanel>
        <TabPanel>
          <Carousal images={tab3Images}/>
        </TabPanel>
      </Tabs>
      </>
    );
  }
  
  export default PhotoAlbumDesktop;
  