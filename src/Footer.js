import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <div>
                <div id="footer_social">
                    Stay tuned, follow us:
            <br />
                    <div>
                        <a href="https://www.youtube.com/user/nastycop420" target="_blank"><img className="footerIcon" src="assets/youtube.png"></img></a>
                        <a href="https://www.facebook.com/groups/BlackSheepLOUNGE" target="_blank"><image src="assets/facebook.png" /></a>
                        <a href="https://www.instagram.com/blacksheepfpv/" target="_blank"><img className="footerIcon" src="assets/instagram.png" /></a>
                        <a href="https://plus.google.com/+nastycop420" target="_blank"><img className="footerIcon" src="assets/twitter.png" /></a>
                        <a href="https://twitter.com/blacksheepfpv" target="_blank"><img className="footerIcon" src="assets/whatsapp.png" /></a >
                    </div >
                </div >
                <p classNameName="copyright" > Copyright© 2019 <a href="mailto:l.besil@gmail.com" > Luis Besil </a> - All Rights Reserved.</p>
            </div >
        )
    }
}
export default Footer;