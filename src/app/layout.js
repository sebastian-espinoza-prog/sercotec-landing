import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Centro de negocios Santiago - SERCOTEC",
  description: "Apoyo y acompañamiento para micro, pequeñas y medianas empresas",
};

export default function RootLayout({children}) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}