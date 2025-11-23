import React from "react";
import SimpleLocalize from "../SimpleLocalize";
import { FormattedMessage } from "react-intl";
import { StaticImage } from "gatsby-plugin-image";
import "bootstrap/dist/css/bootstrap.min.css";
import { circle } from "../components/general.module.css";
import {
    Row,
    Container,
    Col,
    Stack,
} from "react-bootstrap";
import { format, intervalToDuration, formatDuration, parseISO } from 'date-fns'

function ResumePage(props) {

    const resume = props.pageContext.messages.data;
    console.error("resume update: ", resume);

    const stars = (num) => {
        let renderStars = "";
        for (let i = 0; i < num; i++) {
            renderStars += "★";
        }
        return <span> {renderStars} </span>;
    };

    const workHistory = resume?.work_history?.map((work) => (
        <>
            <Stack direction="horizontal" gap={3}>
                <div className=""> <p>{format(parseISO(work.start_date, "yyyy-mm-dd"), 'MMM, yy', 'pp')} - {format(work.end_date? parseISO(work.end_date, "yyyy-mm-dd") : new Date(), 'MMM,yy', 'pp')} </p>
                        {formatDuration (intervalToDuration({start: (parseISO(work.start_date, "yyyy-mm-dd")), end: work.end_date? parseISO(work.end_date, "yyyy-mm-dd") : new Date() }), { format: ['years', 'months'] })}
                </div>
                <div className="mx-4">
                    <p className="h3">{work.position}</p>
                    <p className="h5">{work.company}</p>
                </div>
            </Stack>
            <Stack direction="horizontal" gap={3}>
                <div className="mx-5">
                </div>
                <div className="mx-5">
                    <p className="">{work.description}</p>
                </div>
            </Stack>
            <Stack direction="horizontal" gap={3}>
                <div className="mx-5">
                </div>
                <div className="mx-4">
                    <ul> {work?.tasks?.map((task) => (
                        <li>{task}</li>
                    ))}</ul>
                </div>
            </Stack>
            <Stack direction="horizontal" gap={3}>
                <div className="mx-5">
                </div>
                <div className="">
                    {work.achievements?.map((achievement) => (
                        <p className="px-5"> <a href={achievement.url} className="h5"> {achievement?.title}</a>  | {achievement.description} </p>
                    ))}
                </div>
            </Stack>
        </>)
    );



    return (
        <SimpleLocalize {...props}>
            <div style={{ paddingLeft: 0, paddingRight: 0, marginLeft: 0, marginRight: 0 }}>
                <Container fluid className="p-0">
                    <Row style={{ marginLeft: 0, marginRight: 0 }} >
                        <Col xs={12} className="p-0 bg-dark text-light">
                            <div className="d-flex align-items-center">
                                <div className="p-3">
                                    <span className="mx-5 h2"> Alexis Orellana </span>
                                    <p className="mx-5 mt-1"> React Native Developer </p>
                                </div>
                                <div className="d-flex align-items-center justify-content-center m-2">
                                    <StaticImage
                                        src="../img/norellanac.JPG"
                                        alt="norellanac"
                                        placeholder="blurred"
                                        layout="fixed"
                                        width={110}
                                        height={110}
                                        className={circle}
                                    />
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={9} className="py-2 px-5">
                            <section className="p-0 m-0">
                                <p >
                                    <FormattedMessage
                                        id={"data.summary"}
                                        defaultMessage={resume.summary}
                                    />
                                </p>
                            </section>
                            <section className="p-0 mx-0 mb-3">
                                <span className="h3">
                                    <FormattedMessage
                                        id="experience"
                                        defaultMessage="experience"
                                    />
                                </span>
                                <hr />
                                {workHistory}
                            </section>
                            <section className="p-0 m-0">
                                <span className="h3">
                                    <FormattedMessage
                                        id="education"
                                        defaultMessage="education"
                                    />
                                </span>
                                <hr />
                                <Stack direction="horizontal" gap={3}>
                                    <div className="">
                                        <p>{resume.education.start_date}</p>
                                        <p>{resume.education.end_date}</p>
                                    </div>
                                    <div className="mx-5">
                                        <p className="h3">{resume.education.title}</p>
                                        <p className="h5">{resume.education.school}</p>
                                    </div>
                                </Stack>
                            </section>
                        </Col>
                        <Col xs={3} className="bg-light">
                            <section className="p-0 m-0">
                                <span className="h3">
                                    <FormattedMessage
                                        id="contact_info"
                                        defaultMessage="contact_info"
                                    />
                                </span>
                                <hr />
                                <Stack direction="horizontal" gap={3}>
                                    <div className="">
                                        <a href={'tel:+' + resume.phone} className="nav-link m-1">
                                            <span className="h5">{'+' + resume.phone} </span>
                                        </a>
                                        <a href={'mailto:' + resume.email} className="nav-link m-1">
                                            <span className="">{resume.email} </span>
                                        </a>
                                        {resume.contact_url.map((item) => (
                                            <a href={item.url} className="nav-link m-1">
                                                <span className="">{item.title} </span>
                                            </a>
                                        ))}
                                    </div>
                                </Stack>
                            </section>
                            <section className="p-0 mx-0 mt-3">
                                <span className="h3">
                                    <FormattedMessage
                                        id="lenguages"
                                        defaultMessage="lenguages"
                                    />
                                </span>
                                <hr />
                                <Stack direction="horizontal" gap={3}>
                                    <div className="">
                                        {resume.languages.map((item) => (
                                            <p className="h5">{item.language} | {item.level} </p>
                                        ))}
                                    </div>
                                </Stack>
                            </section>
                            <>
                            <section className="pt-5 m-0">
                                <span className="h3">
                                    <FormattedMessage
                                        id="skills"
                                        defaultMessage="skills"
                                    />
                                </span>
                                <hr />
                            </section>
                                {resume.tech_skills.map((item) => (
                                    <section className="py-3 m-0">
                                        <span className="h5">
                                            <FormattedMessage
                                                id={item.title}
                                                defaultMessage={item.title}
                                            />
                                            {stars(item.stars)}
                                        </span>
                                        <Stack direction="horizontal" gap={1}>
                                            <div className="">
                                                {item.tools.map((tool) => (
                                                    <span className="mx-auto">{tool} | </span>
                                                ))}
                                            </div>
                                        </Stack>
                                    </section>
                                ))}
                            </>

                        </Col>
                    </Row>
                </Container>
            </div>
            {/* https://www.hireitpeople.com/resume-database/64-java-developers-architects-resumes/143437-react-native-developer-resume-lowell-ar
            https://www.cakeresume.com/resources/react-developer-resume?locale=es
            */}
        </SimpleLocalize>
    );
}

export default ResumePage;