import TypingEffect from '../components/TypingEffect';
import img from '../assets/img.png';
import EntryAnimate from '../components/EntryAnimate';

export default function Home() {

    return (
        <main>
            <section id="left">
                <p id='name'>Hi, I'm Agboola Samson Ifedolapo</p>
                <h2 id='changingtext'><span id='iam'>I am a</span> <TypingEffect /></h2>

                <EntryAnimate threshold={0.2}>
                    <p id='about'>I'm a passionate and dedicated software engineer with a strong foundation in both frontend and backend technologies. My expertise lies in creating seamless user experiences and building robust backend systems. I thrive on challenges and continuously seek opportunities to learn and grow in the ever-evolving world of technology.<br /><br />With a background in mechanical design engineering, I bring a unique perspective to software development, combining technical skills with a creative approach to problem-solving. I am committed to delivering high-quality solutions that meet the needs of users and drive business success.</p>
                </EntryAnimate>
            </section>

            <EntryAnimate>
                <section id="right">
                    <img src={img} alt="Agboola samson ifedolapo's portrait" />
                </section>

            </EntryAnimate>


        </main >
    )
}
