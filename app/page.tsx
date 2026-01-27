import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { SignedOut } from "@clerk/nextjs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default async function Home() {
  const { userId } = await auth();

  if (userId) {
    redirect("/dashboard");
  }

  return (
    <main className="flex min-h-[calc(100vh-60px)] items-center justify-center px-4 py-12">
      <SignedOut>
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl">Welcome to Link Shortener</CardTitle>
            <CardDescription className="mt-2">
              Sign in to start creating shortened links and managing your URLs.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center text-sm text-muted-foreground">
            Use the Sign In button in the header to get started.
          </CardContent>
        </Card>
      </SignedOut>
    </main>
  );
}
