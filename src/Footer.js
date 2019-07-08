import React from 'react';
import './Footer.css';


class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <div id="footer_social">Stay tuned, follow us:
            <br />
                    <div>
                        <a href="https://www.youtube.com/user/nastycop420"><img src="assets/youtube.png" className="footerIcon" alt="Falta img" title="icon"></img></a>
                        <a href="https://www.facebook.com/groups/BlackSheepLOUNGE"><img src="assets/facebook.png" className="footerIcon" alt="Falta img" title="Patitas"></img></a>
                        <a href="https://www.instagram.com/blacksheepfpv/"><img src="assets/instagram.png" className="footerIcon" alt="Falta img" title="Patitas"></img></a>
                        <a href="https://plus.google.com/+nastycop420"><img src="assets/twitter.png" className="footerIcon" alt="Falta img" title="Patitas"></img></a>
                        <a href="https://twitter.com/blacksheepfpv"><img src="assets/whatsapp.png" className="footerIcon" alt="Falta img" title="Patitas"></img></a>
                    </div>
                </div>
                <p className="copyright"> Copyright© 2019 <a href="mailto:l.besil@gmail.com" > Luis Besil </a> - All Rights Reserved.</p>
            </div>
        )
    }
}
export default Footer;