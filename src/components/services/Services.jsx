import React, { useState } from 'react';
import { UilServer, UilDatabase, UilGitlab, UilLayerGroup, UilArrowRight, UilTimes, UilBracketsCurly, UilCheckCircle } from '@iconscout/react-unicons';
import './services.css';

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    const services = [
        {
            icon: <UilServer className="services__icon" />,
            title: "API\nDevelopment",
            description: "My work, reflecting 2+ years of experience. Dedicated to delivering quality to clients and companies.",
            details: [
                "Design and implement RESTful APIs",
                "Ensure secure and efficient data handling",
                "Integrate third-party services and APIs"
            ]
        },
        {
            icon: <UilDatabase className="services__icon" />,
            title: "Database\nManagement",
            description: "My work, reflecting 2+ years of experience. Dedicated to delivering quality to clients and companies.",
            details: [
                "Design and optimize database schemas",
                "Implement data migration and backup solutions",
                "Ensure data integrity and security"
            ]
        },
        {
            icon: <UilGitlab className="services__icon" />,
            title: "Version Control\nwith Git",
            description: "My work, reflecting 2+ years of experience. Dedicated to delivering quality to clients and companies.",
            details: [
                "Manage source code with Git for efficient version control.",
                "Implement branching and merging strategies.",
                "Ensure code integrity and collaboration through Git workflows."
            ]
        },
        {
            icon: <UilLayerGroup className="services__icon" />,
            title: "Microservices\nArchitecture",
            description: "My work, reflecting 2+ years of experience. Dedicated to delivering quality to clients and companies.",
            details: [
                "Develop and manage microservices using Spring Boot",
                "Implement inter-service communication",
                "Ensure scalability and fault tolerance"
            ]
        },
        {
            icon: <UilBracketsCurly className="services__icon" />,
            title: "Java Logic\nDevelopment",
            description: "My work, reflecting 2+ years of experience. Dedicated to delivering quality to clients and companies.",
            details: [
                "Develop complex business logic in Java",
                "Design and maintain scalable backend systems",
                "Optimize Java applications for performance",
                "Ensure code quality through rigorous testing and reviews"
            ]
        }
    ];

    return (
        <section className="services section" id="services">
            <h2 className="section__title">Expertise</h2>
            <span className="section__subtitle">What I Do</span>

            <div className="services__container container grid">
                {services.map((service, index) => (
                    <div className="services__content" key={index}>
                        <div>
                            {service.icon}
                            <h3 className="services__title">
                                {service.title.split('\n').map((line, i) => (
                                    <React.Fragment key={i}>{line}<br/></React.Fragment>
                                ))}
                            </h3>
                        </div>
                        <span className="services__button" onClick={() => toggleTab(index + 1)}>
                            View More <UilArrowRight className="services__button-icon" />
                        </span>

                        <div className={toggleState === index + 1 ? "services__modal active-modal" : "services__modal"}>
                            <div className="services__modal-content">
                                <UilTimes className="services__modal-close" onClick={() => toggleTab(0)} />
                                <h3 className="services__modal-title">{service.title.replace('\n', ' ')}</h3>
                                <p className="services__modal-description">{service.description}</p>
                                <ul className="services__modal-services grid">
                                    {service.details.map((item, idx) => (
                                        <li className="services__modal-service" key={idx}>
                                            <UilCheckCircle className="services__modal-icon" />
                                            <p className="services__modal-info">{item}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;