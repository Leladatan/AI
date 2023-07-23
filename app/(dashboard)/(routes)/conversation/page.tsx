import {NextPage} from "next";
import Heading from "@/components/Heading";
import {tools} from "@/const/const";
import Form from "@/components/pages/conversation/Form";

const ConversationPage: NextPage = () => {

    return (
        <>
            <Heading
                title={tools[0].label}
                description="Our most advanced conversation model."
                icon={tools[0].icon}
                iconColor={tools[0].color}
                bgColor={tools[0].bgColor}
            />
            <div className="px-4 lg:px-8">
                <Form />
                <div className="space-y-4 mt-4">
                    Messages content
                </div>
            </div>
        </>
    );
};

export default ConversationPage;
