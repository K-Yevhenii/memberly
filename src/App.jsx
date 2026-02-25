import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import ClientsSection from "./components/ClientsSection/ClientsSection";
import ManagementSection from "./components/ManagementSection/ManagementSection";

function App() {
  return (
    <Layout>
      <Header />
      <main>
        <Hero />
        <ClientsSection />
        <ManagementSection />
      </main>
    </Layout>
  );
}

export default App;
