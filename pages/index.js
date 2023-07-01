import { Inter } from "next/font/google";
// import ManualHeader from "../components/ManualHeader";
import Header from "../components/Header";
const inter = Inter({ subsets: ["latin"] });
import LotteryEnterance from "../components/LotteryEnterance";

export default function Home() {
  return (
    <div>
      <Header />
      <LotteryEnterance />
    </div>
  );
}
