"use client";

import { useAuth } from "@clerk/nextjs";
import { useEffect, useRef } from "react";

export function RedirectIfAuthenticated() {
  const { isSignedIn, isLoaded } = useAuth();
  const hasRedirected = useRef(false);

  useEffect(() => {
    // Wait for Clerk to finish loading and only redirect once
    if (isLoaded && isSignedIn && !hasRedirected.current) {
      hasRedirected.current = true;
      // Use window.location for a hard redirect to ensure server-side re-render
      window.location.href = "/dashboard";
    }
  }, [isSignedIn, isLoaded]);

  return null;
}
