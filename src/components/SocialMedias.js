import {AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, AiFillYoutube} from 'react-icons/ai';

export default function SocialMedias(){
    return (
        <div className="social-medias">
            <p>Dive into the tastiest street-style fast food experience you’ve ever had! Satisfy your cravings with the most mouthwatering burgers. </p>
            <div className="social-medias-icons">
                <AiFillTwitterSquare/>
                <AiFillFacebook/>
                <AiFillInstagram/>
                <AiFillYoutube/>
            </div>
        </div>
    );
}
