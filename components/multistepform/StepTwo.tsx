import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

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
}
const StepTwo = ({ formData, handleSelectChange }: Props) => {
    return (
        <div className="space-y-4">
            <div className="space-y-2">
                <h3 className="text-lg font-medium">Background & Experience</h3>
                <p className="text-sm text-muted-foreground">
                    Tell us about your coding experience and educational background.
                </p>
            </div>
            <div className="space-y-2">
                <Label htmlFor="experience">Coding Experience</Label>
                <RadioGroup
                    id="experience"
                    defaultValue={formData.experience}
                    onValueChange={(value) => handleSelectChange("experience", value)}
                >
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="beginner" id="beginner" />
                        <Label htmlFor="beginner">Beginner (No experience)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="some" id="some" />
                        <Label htmlFor="some">
                            Some experience (Self-taught or courses)
                        </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="intermediate" id="intermediate" />
                        <Label htmlFor="intermediate">
                            Intermediate (Built some projects)
                        </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="advanced" id="advanced" />
                        <Label htmlFor="advanced">Advanced (Professional experience)</Label>
                    </div>
                </RadioGroup>
            </div>
            <div className="space-y-2">
                <Label htmlFor="education">Highest Level of Education</Label>
                <Select
                    defaultValue={formData.education || ""}
                    onValueChange={(value) => handleSelectChange("education", value)}
                >
                    <SelectTrigger className="cursor-pointer">
                        <SelectValue placeholder="Select your education level" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                        <SelectItem value="high-school" className="cursor-pointer">
                            High School
                        </SelectItem>
                        <SelectItem value="some-college" className="cursor-pointer">
                            Some College
                        </SelectItem>
                        <SelectItem value="associates" className="cursor-pointer">
                            Associate&apos;s Degree
                        </SelectItem>
                        <SelectItem value="bachelors" className="cursor-pointer">
                            Bachelor&apos;s Degree
                        </SelectItem>
                        <SelectItem value="masters" className="cursor-pointer">
                            Master&apos;s Degree
                        </SelectItem>
                        <SelectItem value="phd" className="cursor-pointer">
                            PhD or Higher
                        </SelectItem>
                        <SelectItem value="other" className="cursor-pointer">
                            Other
                        </SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
};

export default StepTwo;
