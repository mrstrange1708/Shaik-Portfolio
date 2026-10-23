import { GENERAL_INFO, SOCIAL_LINKS } from '@/lib/data';

const Footer = () => {

    return (
        <footer className="text-center pb-5" id="contact">
            <div className="container">
                <p className="text-lg">Have a project in mind?</p>
                <a
                    href={`mailto:${GENERAL_INFO.email}`}
                    className="text-3xl sm:text-4xl font-anton inline-block mt-5 mb-10 hover:underline"
                >
                    {GENERAL_INFO.email}
                </a>

                <div className="flex items-center justify-center gap-6 mb-6 text-sm uppercase tracking-wider">
                    {[
                        ...SOCIAL_LINKS,
                        { name: 'resume', url: '/Assets/Shaik_Junaid_Resume.pdf' },
                    ].map((link) => (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                <p className="leading-none text-muted-foreground">
                    Designed & built by Shaik Junaid Sami
                </p>
            </div>
        </footer>
    );
};

export default Footer;
