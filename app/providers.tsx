"use client";

import type { ThemeProviderProps } from "next-themes";

import * as React from "react";
import { HeroUIProvider } from "@heroui/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { AppProgressProvider as ProgressProvider } from "@bprogress/next";
// import { useRouter } from "next/router";
import { useRouter } from "@bprogress/next";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

declare module "@react-types/shared" {
  interface RouterConfig {
    routerOptions: NonNullable<
      Parameters<ReturnType<typeof useRouter>["push"]>[1]
    >;
  }
}

export function Providers({ children, themeProps }: ProvidersProps) {
  // const router = useRouter();

  return (
    // <HeroUIProvider navigate={router.push}>
    <HeroUIProvider>
      <NextThemesProvider {...themeProps}>
        <ProgressProvider
          shallowRouting
          color="#1BFF00"
          height="6px"
          options={{ showSpinner: false }}
        >
          {children}
        </ProgressProvider>
      </NextThemesProvider>
    </HeroUIProvider>
  );
}
