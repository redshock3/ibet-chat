import { SWRConfig } from "swr";
import "../styles/globals.css";
import LangProvider from "@/providers/lang-provider";

export default function App({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{
        refreshInterval: 60000,
      }}
    >
      <LangProvider>
        <Component {...pageProps} />
      </LangProvider>
    </SWRConfig>
  );
}
