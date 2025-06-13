"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { trpc } from "../_trpc/client";
import { useEffect, Suspense } from "react";

function AuthHandler() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const origin = searchParams.get("origin");

  const query = trpc.authCallback.useQuery();

  useEffect(() => {
    if (query.status === "success" && query.data?.success) {
      router.push(origin || "/dashboard");
    }

    if (query.status === "error") {
      console.error("Authentication error:", query.error.message);
    }
  }, [query.status, query.data, query.error, origin, router]);

  if (query.isLoading) {
    return <div>Loading authentication callback...</div>;
  }

  if (query.isError) {
    return (
      <div className="text-red-600">
        Auth failed: {query.error.message}
      </div>
    );
  }

  return null;
}

const Page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AuthHandler />
    </Suspense>
  );
};

export default Page;
