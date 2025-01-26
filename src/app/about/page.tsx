import { CopyrightIcon } from "lucide-react";

const AboutPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen p-4 md:pb-20 overflow-hidden ">
            <h1 className="text-4xl md:text-7xl font-bold text-white">About Page</h1>
            <div className="flex flex-col items-center">
                <div className="flex flex-col mt-10 items-center">
                    <p className="text-white">LocateAI is a web application designed to help travelers recover lost items during their journeys.</p>
                    <p className="text-white">The platform enables users to report lost or found items and uses Generative AI to match descriptions and suggest recovery actions.</p>
                </div>
                <div className="flex items-center gap-2 text-white mt-10">
                    <CopyrightIcon className="w-6 h-6" />
                    <span className="font-semibold">LocateAI 2025</span>
                </div>
            </div>
        </div>
    )
}

export default AboutPage;