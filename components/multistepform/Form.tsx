"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

type Props = {
    formStep: number;
    setFormStep: (step: number) => void;
};

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    experience: string;
    education: string;
    reason: string;
    referral: string;
    cohort: string;
}

const Form = ({ formStep, setFormStep }: Props) => {
    const router = useRouter();

    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        experience: "beginner",
        education: "",
        reason: "",
        referral: "",
        cohort: "upcoming",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSelectChange = (name: string, value: string) => {
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const nextStep = () => {
        const nextstep = formStep + 1;
        setFormStep(nextstep);
        window.scrollTo(0, 0);
    };

    const prevStep = () => {
        const lastStep = formStep - 1;
        setFormStep(lastStep);
        window.scrollTo(0, 0);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the data to your backend
        console.log("Form submitted:", formData);

        // Show success message
        // toast({
        //     title: "Application Submitted!",
        //     description: "We've received your application and will be in touch soon.",
        // })

        const response = await fetch("/api/send-application", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                to: "hk7277842@gmail.com",
                subject: "Hello from SendGrid!",
                text: "This is a test email sent from Next.js",
            }),
        });

        const data = await response.json();
        if (data.success) {
            console.log("✅ Email sent successfully!");
        } else {
            console.error("❌ Email failed to send:", data.message);
        }

        // // Redirect to home page after a delay
        // setTimeout(() => {
        //     router.push("/")
        // }, 2000)
    };


    return (
        <form onSubmit={handleSubmit}>
            {formStep === 0 && (
                <StepOne formData={formData} handleChange={handleChange} />
            )}

            {formStep === 1 && (
                <StepTwo formData={formData} handleSelectChange={handleSelectChange} />
            )}

            {formStep === 2 && (
                <StepThree
                    formData={formData}
                    handleChange={handleChange}
                    handleSelectChange={handleSelectChange}
                />
            )}

            <div className="mt-8 flex justify-between">
                {formStep > 0 && (
                    <Button type="button" variant="outline" onClick={prevStep}>
                        Previous
                    </Button>
                )}

                {formStep < 2 ? (
                    <Button
                        type="button"
                        onClick={nextStep}
                        className={formStep === 0 ? "ml-auto" : ""}
                    >
                        Next
                    </Button>
                ) : (
                    <Button type="submit">Submit Application</Button>
                )}
            </div>
        </form>
    );
};

export default Form;
