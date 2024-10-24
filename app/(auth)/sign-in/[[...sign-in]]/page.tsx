import { ClerkLoaded, ClerkLoading, SignIn } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="h-full lg:flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-4 pt-16 lg:pt-6">
          <h1 className="font-bold text-3xl text-[#2E2A47]">Welcome Back!</h1>
          <p className="text-base text-[#7E8CA0]">
            Log in or create account to get back to youur dashboard!
          </p>
        </div>
        <div className="flex items.center justify-center mt-8 lg:mt-6 aspect-square">
          <ClerkLoaded>
            <SignIn path="/sign-in" />
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 className="animate-spin text-muted-foreground" />
          </ClerkLoading>
        </div>
      </div>
      <div className="h-full bg-gradient-to-b from-sky-600 to-sky-400 hidden lg:flex items-center justify-center gap-x-6">
        <h2 className="text-2xl lg:text-5xl text-white font-bold">Finance</h2>
        <Image src="/logo.svg" height={100} width={100} alt="Logo" />
      </div>
    </div>
  );
}
