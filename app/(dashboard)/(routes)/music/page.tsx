import {NextPage} from "next";
import {tools} from "@/const/const";
import Heading from "@/components/Heading";

const MusicPage: NextPage = () => {

    return (
        <>
            <Heading
                title={tools[3].label!}
                description="Our most advanced conversation model."
                icon={tools[3].icon}
                iconColor={tools[3].color}
                bgColor={tools[3].bgColor}/>
        </>
    );
};

export default MusicPage;
