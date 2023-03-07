import React, { useEffect } from 'react';
import "@/styles/globals.css";
import "@/styles/base.css";
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { HydrationProvider, Client } from "react-hydration-provider";
import { SessionProvider } from "next-auth/react"
i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['en', 'en'],
    fallbackLng: 'en',
    debug: false,
    // Options for language detecto
    detection: {
      order: ['path', 'cookie'],
      caches: ['cookie'],
    },
    // react: { useSuspense: false },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },
  });

export default function App({ Component, pageProps: {session, ...pageProps } }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  useEffect(() => {
    import("jquery/dist/jquery.min.js");
  }, []);

  useEffect(() => {
    typeof document !== undefined ? require('bootstrap/dist/js/bootstrap') : null
  }, [])

  return (
    <HydrationProvider>
      <SessionProvider session={session}>
      <Client>
        <Component {...pageProps} />
      </Client>
      </SessionProvider>
    </HydrationProvider>
  );
}
