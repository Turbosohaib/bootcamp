import React from 'react'
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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

type Props = {
    formData: FormData;
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const StepOne = ({ formData, handleChange }: Props) => {
    return (
        <div className="space-y-4">
            <div className="space-y-2">
                <h3 className="text-lg font-medium">Personal Information</h3>
                <p className="text-sm text-muted-foreground">
                    Please provide your contact details so we can reach you.
                </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>
            <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
            </div>
        </div>
    )
}

export default StepOne