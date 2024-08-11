import React from "react";
import { Head } from "@inertiajs/react";

interface WelcomeUserProps {
    name: string;
}

const WelcomeUser: React.FC<WelcomeUserProps> = ({ name }) => {
    return (
        <>
            <Head title="Welcome User" />
            <div className="container mx-auto p-4">
                <h1 className="text-4xl font-bold">Welcome, {name}!</h1>
                <p className="mt-4 text-lg">This is your user dashboard.</p>
            </div>
        </>
    );
};

export default WelcomeUser;
