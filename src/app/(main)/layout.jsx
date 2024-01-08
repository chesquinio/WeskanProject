import Header from "@/src/components/header";

export default function MainLayout({ children }) {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
}
