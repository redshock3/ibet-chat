import { Montserrat } from "next/font/google";
import { Chat } from "../components/organisms/chat/chat";
import { useEffect, useState } from "react";
import { BetsMenu } from "@/components/molecules/bets-menu";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), [600]);
  }, []);

  return (
    <main className={`main ${montserrat.className}`}>
      <section
        className="container content transition-all"
        style={loaded ? { opacity: 1 } : { opacity: 0 }}
      >
        <div />
        <div>
          <BetsMenu />
        </div>
        <div>
          <div style={{ position: "sticky", top: 0, width: "100%" }}>
            <Chat />
          </div>
        </div>
      </section>
    </main>
  );
}
