import { Fragment } from "react";
import Home from "../components/Home/Home";
import MailOptions from "../components/Mail/MailOptions";

const HomePage = () => {
    return (
        <Fragment>
        <Home />
        <MailOptions />
        </Fragment>
    )
};

export default HomePage;