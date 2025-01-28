import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const AuthenticatedHomepage = () => {
    return (
        <div className="flex items-center justify-center">
            <Card className="w-full max-w-4xl p-10 h-[300px] md:h-[580px] flex flex-col items-center justify-center shadow-xl bg-gradient-to-br from-teal-700 to-cyan-700 border-0 rounded-xl">
                <CardHeader className="flex items-center text-center">
                    <CardTitle className="text-4xl md:text-6xl font-bold text-white">Report a Lost / Found Item</CardTitle>
                </CardHeader>
                <CardContent className="flex justify-center mt-8">
                    <div className="flex flex-col md:flex-row items-center gap-20">
                        <Button className="px-6 py-6 text-lg font-semibold rounded-lg bg-white text-cyan-800 shadow-md hover:bg-gray-100 hover:shadow-lg transform hover:-translate-y-1 transition duration-300 ease-in-out" variant="default">
                            <Link href="/report/found-item">Found Item</Link>
                        </Button>
                        <Button className="px-6 py-6 text-lg font-semibold rounded-lg bg-white text-cyan-800 shadow-md hover:bg-gray-100 hover:shadow-lg transform hover:-translate-y-1 transition duration-300 ease-in-out" variant="default">
                            <Link href="/report/lost-item">Lost Item</Link>
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default AuthenticatedHomepage