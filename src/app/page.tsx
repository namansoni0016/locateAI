import { Button } from "@/components/ui/button";
import { SignUpButton } from "@clerk/nextjs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex items-center justify-center w-full md:h-[700px] overflow-hidden">
      <div className="flex flex-col items-center justify-center w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
          <div className="flex items-center justify-center">
            <img src="/images/locateAI.png" alt="LocateAI" className="max-w-[400px] md:max-w-[800px] h-auto object-contain"/>
          </div>
          <div className="flex items-center justify-center">
            <Card className="flex flex-col items-center justify-center w-full h-[250px] md:h-[400px] md:p-6 shadow-2xl bg-cyan-700 border-0"> 
              <CardHeader className="flex flex-col items-center justify-center">
                <CardTitle>
                  <h1 className="text-3xl md:text-5xl text-center font-bold text-white">Welcome to LocateAI!</h1>
                </CardTitle>
                <CardDescription>
                  <p className="mt-2 text-center text-base md:text-lg text-gray-100">
                    Your AI powered lost and found assistant!
                  </p>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <SignUpButton mode="modal">
                  <Button variant="default">Get Started...</Button>
                </SignUpButton>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
