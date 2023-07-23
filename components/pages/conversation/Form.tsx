"use client";

import * as z from "zod";
import {type FC} from 'react';
import {useForm} from "react-hook-form";
import {formSchema} from "./constants";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form as FormUI, FormControl, FormField, FormItem} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";

const Form: FC = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            prompt: ""
        },
    });

    const isLoading: boolean = form.formState.isSubmitting;
    const onSubmit = async (values: z.infer<typeof formSchema>): Promise<void> => {
        console.log(values);
    };

    return (
        <FormUI {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}
                  className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
            >
                <FormField render={({field}) => (
                    <FormItem className="col-span-12 lg:col-span-10">
                        <FormControl className="m-0 p-0">
                            <Input
                                className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                                disabled={isLoading}
                                placeholder="How di I calculate the radius of a circle?"
                                {...field}
                            />
                        </FormControl>
                    </FormItem>
                )} name="Prompt"
                />
                <Button className="col-span-12 lg:col-span-2 w-full" disabled={isLoading}>
                    Generate
                </Button>
            </form>
        </FormUI>
    );
};

export default Form;
