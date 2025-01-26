import { Button } from "@/components/ui/button";
import { SignUpButton } from "@clerk/nextjs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex items-center justify-center w-full mx-auto h-full">
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex items-center justify-center">
            <img src="/images/locateAI.png" alt="LocateAI" className="md:pb-20 object-contain transform hover:scale-105 transition duration-300 ease-in-out"/>
          </div>
          <div className="flex items-center justify-center md:justify-start md:pb-20">
            <Card className="flex flex-col items-center justify-center w-[300px] xs:w-[400px] md:w-[600px] h-[250px] md:h-[400px] md:p-6 shadow-xl bg-gradient-to-br from-teal-700 to-cyan-700 border-0 rounded-xl"> 
              <CardHeader className="flex flex-col items-center justify-center text-center space-y-4">
                <CardTitle>
                  <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">Welcome to LocateAI!</h1>
                </CardTitle>
                <CardDescription>
                  <p className="mt-2 text-lg md:text-xl text-gray-100">
                    Your AI powered lost and found assistant!
                  </p>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <SignUpButton mode="modal">
                  <Button variant="default" className="px-6 py-6 text-lg font-semibold rounded-lg bg-white text-cyan-800 shadow-md hover:bg-gray-100 hover:shadow-lg transform hover:-translate-y-1 transition duration-300 ease-in-out">Get Started...</Button>
                </SignUpButton>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
