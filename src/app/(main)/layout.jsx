import Footer from "@/components/main/footer";
import Header from "@/components/main/header";
import News from "@/components/main/news";

export default function MainLayout({ children }) {
  return (
    <main>
      <Header />
      {children}
      <News />
      <Footer />
    </main>
  );
}
