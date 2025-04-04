import TypingEffect from '../components/TypingEffect';
import img from '../assets/img.png';

export default function Home() {

    return (
        <main>
            <section id="left">
                <h1>Hi, I'm Agboola Samson Ifedolapo</h1>
                <h2 id='changingtext'><span id='iam'>I am a</span> <TypingEffect /></h2>
                <p>I'm a passionate and dedicated software engineer with a strong foundation in both frontend and backend technologies. My expertise lies in creating seamless user experiences and building robust backend systems. I thrive on challenges and continuously seek opportunities to learn and grow in the ever-evolving world of technology.</p>
                <p>With a background in mechanical design engineering, I bring a unique perspective to software development, combining technical skills with a creative approach to problem-solving. I am committed to delivering high-quality solutions that meet the needs of users and drive business success.</p>
            </section>
            <section id="right">
                <img src={img} alt="Agboola samson ifedolapo's portrait" />
            </section>

        </main>
    )
}
