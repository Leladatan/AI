import {NextPage} from "next";
import { SignIn } from "@clerk/nextjs";

const SingInPage: NextPage = () => {
    return (
        <SignIn />
    );
};

export default SingInPage;
