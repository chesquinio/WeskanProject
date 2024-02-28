import CategoryModal from "@/components/main/category-modal";
import Footer from "@/components/main/footer";
import Header from "@/components/main/header";
import News from "@/components/main/news";
import WhatsAppButton from "@/components/main/whatsapp-button";

export default function MainLayout({ children }) {
  return (
    <main>
      <Header />
      {children}
      <News />
      <CategoryModal />
      <WhatsAppButton />
      <Footer />
    </main>
  );
}
