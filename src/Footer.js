import React from 'react';
import './Footer.css';


class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <div id="footer_social">Stay tuned, follow us:
            <br />
                    <div>
                        <a href="https://www.youtube.com/user/nastycop420"><img src="assets/youtube.jpg" className="logo img-responsive" alt="Logo Patitas" title="Patitas"></img></a>
                        <a href="https://www.facebook.com/groups/BlackSheepLOUNGE"><img src="assets/facebook.jpg" className="logo img-responsive" alt="Logo Patitas" title="Patitas"></img></a>
                        <a href="https://www.instagram.com/blacksheepfpv/"><img src="assets/instragram.jpg" className="logo img-responsive" alt="Logo Patitas" title="Patitas"></img></a>
                        <a href="https://plus.google.com/+nastycop420"><img src="assets/twitter.jpg" className="logo img-responsive" alt="Logo Patitas" title="Patitas"></img></a>
                        <a href="https://twitter.com/blacksheepfpv"><img src="assets/whatsapp.jpg" className="logo img-responsive" alt="Logo Patitas" title="Patitas"></img></a>
                    </div>
                </div>
                <p className="copyright"> Copyright© 2019 <a href="mailto:l.besil@gmail.com" > Luis Besil </a> - All Rights Reserved.</p>
            </div>
        )
    }
}
export default Footer;