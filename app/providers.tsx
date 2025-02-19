"use client";

import type { ThemeProviderProps } from "next-themes";

import * as React from "react";
import { HeroUIProvider } from "@heroui/system";
// import { useRouter } from "next/navigation";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { useRouter } from "next-nprogress-bar";
import { ThemeProvider as NextThemesProvider } from "next-themes";

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
  const router = useRouter();

  return (
    // <HeroUIProvider navigate={router.push}>
    <HeroUIProvider>
      <NextThemesProvider {...themeProps}>
        {children}
        <ProgressBar
          shallowRouting
          color="#FF204E"
          height="4px"
          options={{ showSpinner: false }}
        />
      </NextThemesProvider>
    </HeroUIProvider>
  );
}
