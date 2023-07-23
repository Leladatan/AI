import {NextPage} from "next";
import {tools} from "@/const/const";
import Heading from "@/components/Heading";

const CodePage: NextPage = () => {

    return (
        <>
            <Heading
                title={tools[4].label!}
                description="Our most advanced conversation model."
                icon={tools[4].icon}
                iconColor={tools[4].color}
                bgColor={tools[4].bgColor}/>
        </>
    );
};

export default CodePage;
