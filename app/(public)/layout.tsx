import { Navbar } from "../components/navbar";
import { WhatsAppLink } from "../components/whatsapp-link";
import {
  JsonLd,
  buildPersonSchema,
  buildWebsiteSchema,
} from "../lib/seo-schema";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <JsonLd data={[buildPersonSchema(), buildWebsiteSchema()]} />
      <Navbar />
      {children}
      <WhatsAppLink />
    </>
  );
}
