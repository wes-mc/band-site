import { SocialIcon } from 'react-social-icons';

function Socials() {
    return (
        <div className='socials'>
            <SocialIcon url="https://www.facebook.com/people/Pioneer-Palace/100086961293325/" target="_blank" network='facebook' style={{ height: 50, width: 50, marginRight: 10 }} fgColor="#ffffff" />
            <SocialIcon url="https://www.instagram.com/pioneerpalace/?hl=en" target="_blank" network='instagram' style={{ height: 50, width: 50, marginRight: 10 }} fgColor="#ffffff" />
            <SocialIcon url="mailto:kylemarlow95@gmail.com?subject=PioneerPalace" network='mailto' style={{ height: 50, width: 50 }} fgColor="#ffffff" />
        </div>
    )
}

export default Socials

