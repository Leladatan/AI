import {NextPage} from "next";
import {tools} from "@/const/const";
import Heading from "@/components/Heading";

const VideoPage: NextPage = () => {

    return (
        <>
            <Heading
                title={tools[2].label!}
                description="Our most advanced conversation model."
                icon={tools[2].icon}
                iconColor={tools[2].color}
                bgColor={tools[2].bgColor}/>
        </>
    );
};

export default VideoPage;
