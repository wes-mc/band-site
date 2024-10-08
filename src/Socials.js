import { SocialIcon } from 'react-social-icons';

function Socials() {
    return (
        <div className='socials'>
            <SocialIcon url="https://www.facebook.com/people/Pioneer-Palace/100086961293325/" target="_blank" network='facebook' style={{ height: 50, width: 50, marginRight: 10 }} fgColor="#ffffff" />
            <SocialIcon url="https://www.instagram.com/pioneerpalace/?hl=en" target="_blank" network='instagram' style={{ height: 50, width: 50, marginRight: 10 }} fgColor="#ffffff" />
            <SocialIcon url="mailto:pioneerpalacemusic@gmail.com?Subject=Inquiry" network='mailto' style={{ height: 50, width: 50 }} fgColor="#ffffff" />
            <SocialIcon url="https://www.tiktok.com/@pioneer.palace" target="_blank" network='tiktok' style={{ height: 50, width: 50, marginLeft: 10, marginRight: 10 }} fgColor="#ffffff" />
            <SocialIcon url="https://www.youtube.com/@PioneerPalace" target="_blank" network='youtube' style={{ height: 50, width: 50, marginRight: -10 }} fgColor="#ffffff" />
        </div>
    )
}

export default Socials

