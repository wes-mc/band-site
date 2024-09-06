import { React, useEffect } from 'react'
import bGvideo from './videos/short.MOV'
import Sidebar from './Sidebar';
import Socials from './Socials';
import { Button, List } from 'antd'

const data = [
  {
    title: 'Wings Etc. 8/30/24 @7:30pm',
    address: "2644 Boiling Springs Rd Suite A, Boiling Springs, SC 29316"
  },
  {
    title: 'Two 95 Food & Spirits 10/4/24 @7:30pm',
    address: "609 Southport Rd, Roebuck, SC 29376"
  },
  {
    title: 'Sycamore Brewing 10/5/24 @5pm',
    address: "2151 Hawkins St, Charlotte, NC 28203"
  },
  {
    title: 'Two 95 Food & Spirits. 10/18/24 @7:30pm',
    address: "609 Southport Rd, Roebuck, SC 29376"
  },
];

const Page = () => {
  useEffect(() => {
    const items = document.querySelectorAll('.ant-list-item');
    items.forEach(item => {
      item.style.color = '#ff5733';
    });
  }, []);
  return (
    <div>
      <video autoPlay loop muted playsInline className="video"><source src={bGvideo} type="video/mp4" /> </video>
      <header>
        <meta name="viewport" content="width=device-width, intial-scale=1.0" />
        <ul className='ul-header'>
          <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
          <Socials />
        </ul>
      </header>
      <main>
        <h1 className='main-text'>Pioneer Palace</h1>
        <h2>
          <List
            className='gig-list'
            itemLayout="vertical"
            dataSource={data}
            renderItem={(item, index) => (
              <List.Item>
                <List.Item.Meta
                  title={item.title}
                  description={item.address}
                  children="test"
                />
              </List.Item>
            )}
          />
          {/* <Button target='_blank' href='https://calendly.com/pioneerpalace/pioneer-palace-gig' size='large' style={{ fontSize: "xxx-large", paddingTop: "auto", paddingBottom: "auto", marginTop: "10px", height: "auto", width: "auto" }} ghost>Click to book us!</Button> */}
        </h2>
      </main>
      <footer className='footer'>This site is built and managed by Pioneer Palace</footer>
    </div >
  );
};

export default Page
