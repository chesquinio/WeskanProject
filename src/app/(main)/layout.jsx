import Footer from "@/components/main/footer";
import Header from "@/components/main/header";

export default function MainLayout({ children }) {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
}
