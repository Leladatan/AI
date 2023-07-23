import {NextPage} from "next";
import {tools} from "@/const/const";
import Heading from "@/components/Heading";

const ImagePage: NextPage = () => {

    return (
        <>
            <Heading
                title={tools[1].label!}
                description="Our most advanced conversation model."
                icon={tools[1].icon}
                iconColor={tools[1].color}
                bgColor={tools[1].bgColor}/>
        </>
    );
};

export default ImagePage;
