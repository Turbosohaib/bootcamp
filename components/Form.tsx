"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";


// Define the type for form data
interface FormData {
    "First name": string;
    "Last name": string;
    Email: string;
    Message: string;
}

export default function Form() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    const sendEmail = (params: Record<string, unknown>) => {
        const toastId = toast.loading("Sending your message, please wait...");
        const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID || '';
        const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID || '';
        const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY || '';
        emailjs
            .send(
                serviceId,
                templateId,
                params,
                {
                    publicKey: publicKey,
                    limitRate: {
                        throttle: 5000,
                    },
                },
            )
            .then(
                () => {
                    toast.success(
                        "I have received your message, I'll get back to you soon!",
                        { id: toastId },
                    );
                },
                (error) => {
                    console.log(error);
                    toast.error(
                        "There was an error sending your message, please try again later!",
                        { id: toastId },
                    );
                },
            );
    };

    const onSubmit = (data: FormData) => {
        console.log(data)
        const templateParams = {
            to_name: "Sohaib Shah",
            from_name: `${data["First name"]} ${data["Last name"]}`,
            reply_to: data.Email,
            message: data.Message,
        };

        sendEmail(templateParams);
    };

    // Ensure data has the correct type
    // const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);

    console.log(errors);

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col items-center justify-center space-y-4"
        >
            <div className="flex items-center gap-4 w-full">
                <input
                    type="text"
                    className="w-full p-2 border border-solid bg-white border-neutral-500 rounded-lg"
                    placeholder="First name"
                    {...register("First name", {
                        required: "This field is required!",
                        minLength: {
                            value: 3,
                            message: "Name should be at least 3 characters long.",
                        },
                    })} />
                <input
                    type="text"
                    className="w-full p-2 border border-solid bg-white border-neutral-500 rounded-lg"
                    placeholder="Last name"
                    {...register("Last name")}
                />
            </div>
            {errors["First name"] && (
                <span className="inline-block self-start text-red-500 font-medium">
                    {errors["First name"].message}
                </span>
            )}
            <input
                type="email"
                className="w-full p-2 border border-solid bg-white border-neutral-500 rounded-lg"
                placeholder="Email"
                {...register("Email", { required: "This field is required!" })}
            />
            {errors.Email && (
                <span className="inline-block self-start text-red-500 font-medium">
                    {errors.Email.message}
                </span>
            )}
            <textarea
                placeholder="Message"
                rows={4}
                cols={50}
                className="w-full p-2 border border-solid bg-white border-neutral-500 rounded-lg"
                {...register("Message", {
                    required: "This field is required!",
                    maxLength: {
                        value: 500,
                        message: "Message should be less then 500 characters",
                    },
                    minLength: {
                        value: 50,
                        message: "Message should be more then 50 characters",
                    },
                })}
            />
            {errors.Message && (
                <span className="inline-block self-start text-red-500 font-medium">
                    {errors.Message.message}
                </span>
            )}
            <Button asChild size="lg" variant="default" className="bg-[#2E0534] text-white cursor-pointer">
                <input type="submit" />
            </Button>
        </form>
    );
}
