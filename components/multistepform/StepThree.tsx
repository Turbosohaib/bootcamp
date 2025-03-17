import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

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
    handleSelectChange: (name: string, value: string) => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};
const StepThree = ({ formData, handleSelectChange, handleChange }: Props) => {
    return (
        <div className="space-y-4">
            <div className="space-y-2">
                <h3 className="text-lg font-medium">Additional Information</h3>
                <p className="text-sm text-muted-foreground">
                    Please tell us why you want to join our bootcamp and how you heard
                    about us.
                </p>
            </div>
            <div className="space-y-2">
                <Label htmlFor="reason">Why do you want to join our bootcamp?</Label>
                <Textarea
                    id="reason"
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    placeholder="Tell us about your goals and what you hope to achieve..."
                    className="min-h-[120px]"
                    required
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="referral">How did you hear about us?</Label>
                <Input
                    id="referral"
                    name="referral"
                    value={formData.referral}
                    onChange={handleChange}
                    placeholder="Google, friend, social media, etc."
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="cohort">Preferred Cohort</Label>
                <Select
                    defaultValue={formData.cohort}
                    onValueChange={(value) => handleSelectChange("cohort", value)}
                >
                    <SelectTrigger className="cursor-pointer">
                        <SelectValue placeholder="Select your preferred cohort" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                        <SelectItem value="upcoming">
                            Spring 2025 (Starts April 1)
                        </SelectItem>
                        <SelectItem className="cursor-pointer" value="summer">Summer 2025 (Starts July 15)</SelectItem>
                        <SelectItem className="cursor-pointer" value="fall">Fall 2025 (Starts October 1)</SelectItem>
                        <SelectItem className="cursor-pointer" value="flexible">Flexible (No preference)</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
};

export default StepThree;
