import { Navbar } from "../components/navbar";
import { WhatsAppLink } from "../components/whatsapp-link";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
      <WhatsAppLink />
    </>
  );
}
