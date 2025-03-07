"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { CarFront, SteeringWheel } from "lucide-react"; // Ride-share-related icons

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
                                <CarFront className="mb-3 h-6 w-6" />
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
                                <SteeringWheel className="mb-3 h-6 w-6" />
                                Driver
                            </Label>
                        </div>
                    </RadioGroup>
                </CardContent>
            </Card>
        </div>
    );
}
