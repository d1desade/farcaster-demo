"use client";

import { useRouter } from "next/navigation";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function Home() {
    const router = useRouter();

    const handleSelection = (value: string) => {
        console.log(value);
        router.push(`/${value}`);
    };

    return (
        <div className="w-[300px] mx-auto py-4 px-2">
            <h1 className="text-2xl font-bold text-center mb-4">DeRiDE</h1>

            <Card>
                <CardHeader>
                    <CardTitle>Select who you are</CardTitle>
                    <CardDescription>Choose your role below</CardDescription>
                </CardHeader>

                <CardContent className="grid gap-6">
                    <RadioGroup defaultValue="" className="grid grid-cols-2 gap-4" onValueChange={handleSelection}>
                        {/* Rider Selection */}
                        <div>
                            <RadioGroupItem value="rider" id="rider" className="peer sr-only" />
                            <Label
                                htmlFor="rider"
                                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="mb-3 h-6 w-6"
                                >
                                    <rect width="20" height="14" x="2" y="5" rx="2" />
                                    <path d="M2 10h20" />
                                </svg>
                                Rider
                            </Label>
                        </div>

                        {/* Driver Selection */}
                        <div>
                            <RadioGroupItem value="driver" id="driver" className="peer sr-only" />
                            <Label
                                htmlFor="driver"
                                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary"
                            >
                                <Icons.apple className="mb-3 h-6 w-6" />
                                Driver
                            </Label>
                        </div>
                    </RadioGroup>
                </CardContent>

                <CardFooter className="flex justify-center gap-4">
                    <Button onClick={() => handleSelection("rider")}>Rider</Button>
                    <Button onClick={() => handleSelection("driver")}>Driver</Button>
                </CardFooter>
            </Card>
        </div>
    );
}
