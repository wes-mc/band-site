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
                <a name="Contact" href="tel:+8647064552" className="menu-item">
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
                <p>A local 5-piece band from Spartanburg, SC ready to fulfill live music needs for your venue. Example venues include bars, parties, weddings, etc! Contact us on any platform seen on this site for pricing and availability. We hope to hear from you soon!</p>
            </Modal>
        </div>
    );
};

export default Sidebar