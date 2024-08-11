import React from "react";
import { Head } from "@inertiajs/react";

interface WelcomeAdminProps {
    name: string;
}

const WelcomeAdmin: React.FC<WelcomeAdminProps> = ({ name }) => {
    return (
        <>
            <Head title="Welcome Admin" />
            <div className="container mx-auto p-4">
                <h1 className="text-4xl font-bold">Welcome, Admin {name}!</h1>
                <p className="mt-4 text-lg">This is your admin dashboard.</p>
            </div>
        </>
    );
};

export default WelcomeAdmin;
