import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';
import { Button, Modal } from 'antd';

const Sidebar = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <div>
            <Menu>
                <a name="About" onClick={showModal} className="menu-item">
                    About
                </a>
                <a name="Contact" href="mailto:contact@pioneerpalaceband.com?Subject=Inquiry" className="menu-item">
                    Contact
                </a>
            </Menu>
            <Modal title="About Us" zIndex={2000} className='modal' open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={[
                <Button key="back" onClick={handleCancel}>
                    Cancel
                </Button>,
                <Button
                    key="link"
                    target='_blank'
                    href="https://calendly.com/pioneerpalace/pioneer-palace-gig"
                    type="primary"
                    onClick={handleOk}
                >
                    Book Now!
                </Button>,
            ]}>
                <p>A local band from Spartanburg, SC playing a variety of music including 80s to modern-day hits. Book us for your bar, party, wedding, or venue. We look forward to hearing from you soon!</p>
            </Modal>
        </div>
    );
};

export default Sidebar
