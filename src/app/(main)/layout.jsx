import Footer from "@/components/footer";
import Header from "@/components/header";

export default function MainLayout({ children }) {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
}
