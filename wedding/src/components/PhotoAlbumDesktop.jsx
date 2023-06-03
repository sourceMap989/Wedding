import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './PhotoAlbumDesktop.css';

function PhotoAlbumDesktop() {
    const [selectedTab, setSelectedTab] = useState(0);
  
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
          <h2>Content for Tab 1</h2>
          <p>This is the content for Tab 1.</p>
        </TabPanel>
        <TabPanel>
          <h2>Content for Tab 2</h2>
          <p>This is the content for Tab 2.</p>
        </TabPanel>
        <TabPanel>
          <h2>Content for Tab 3</h2>
          <p>This is the content for Tab 3.</p>
        </TabPanel>
      </Tabs>
      </>
    );
  }
  
  export default PhotoAlbumDesktop;
  