import Header from "@/components/Header";
import HomePage from "@/components/HomePage";
import Services from "@/components/Services";
import SourceCode from "@/components/SourceCode";

export default function Home() {
  return (
    <div>
      <Header />
      <HomePage />
      <Services />
      <SourceCode />
    </div>
  );
}
