import { Fragment } from "react";
import Home from "../components/Home/Home";
import MailOptions from "../components/Mail/MailOptions";
import { useSelector } from "react-redux";
import MainLayout from "../components/Layout/MainLayout";

const HomePage = () => {
    const mail = useSelector(state => state.mail.mail)
    console.log(mail)
    return (
        <Fragment>

        </Fragment>
    )
};

export default HomePage;