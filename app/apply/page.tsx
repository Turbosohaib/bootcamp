"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Form from "@/components/multistepform/Form"
// import { useToast } from "@/hooks/use-toast"

export default function ApplyPage() {
    // const { toast } = useToast()
    const [formStep, setFormStep] = useState<number>(0)


    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 py-12 w-full flex items-center justify-center">
                <div className="container max-w-3xl">
                    <Link href="/" className="inline-flex items-center text-sm font-medium text-primary mb-6 hover:underline">
                        <ArrowLeft className="mr-1 h-4 w-4" /> Back to Home
                    </Link>

                    <Card className="bg-white">
                        <CardHeader>
                            <CardTitle className="text-2xl">Apply to CodeCamp</CardTitle>
                            <CardDescription>
                                Complete the application below to apply for our web development bootcamp.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Form formStep={formStep} setFormStep={setFormStep} />
                        </CardContent>
                        <CardFooter className="flex justify-between border-t pt-6">
                            <div className="text-sm text-muted-foreground">Step {formStep + 1} of 3</div>
                            <div className="text-sm text-muted-foreground">
                                Need help?{" "}
                                <Link href="/#contact" className="text-primary hover:underline">
                                    Contact us
                                </Link>
                            </div>
                        </CardFooter>
                    </Card>
                </div>
            </main>
            <Footer />
        </div>
    )
}

