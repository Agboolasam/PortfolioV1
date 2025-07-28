
function Contact() {

    const socialLinks = [
        {
            name: "LinkedIn", url: "https://www.linkedin.com/in/agboola-samson/",
            icon: "https://www.svgrepo.com/show/452051/linkedin.svg"
        },
        {
            name: "GitHub", url: "https://github.com/Agboolasam",
            icon: "https://www.svgrepo.com/show/512317/github-142.svg"
        },

        {
            name: "Twitter", url: "https://x.com/therealagboola?s=21",
            icon: "https://vectorseek.com/wp-content/uploads/2023/07/Twitter-X-Logo-Vector-01-2.jpg"
        },
        {
            name: "whatsApp", url: "http://wa.me/2347018953209",
            icon: "https://www.svgrepo.com/show/513060/whatsapp-128.svg"
        }
    ];
    return (
        <div className="contact-page">


            <section className="contact-intro">
                <h1>Elevate Your Digital Environments and Presence</h1>
                <p>
                    Need a skilled Frontend Developer or Cloud DevOps Engineer? Let&apos;s connect and bring your project to life!
                </p>

                <div className="contact-intro-social">
                    <span id="lets-connect">
                        Lets Connect
                    </span>
                    <div className="social">
                        {socialLinks.map(link => (
                            <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer">
                                <img src={link.icon} alt={link.name} />
                            </a>
                        ))}
                    </div>
                </div>

            </section>



            <section className="contact-form">

                <h2>Contact Me</h2>
                <p>
                    I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Whether you have a question or just want to say hi, feel free to reach out!
                </p>
                <form >
                    <label htmlFor="name">Full Name</label>
                    <input type="text" placeholder="Agboola Samson Ifedolapo" required />
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Your Email" required />
                    <label htmlFor="message">Message</label>
                    <textarea id="message" placeholder="What would you like to discuss?" required></textarea>
                    <button id="submit-btn" type="submit">Send Message</button>
                </form>

            </section>




        </div >
    )
}

export default Contact
