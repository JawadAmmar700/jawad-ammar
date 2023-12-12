import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jawad Ammar Portfolio",
  icons: ["/jawad.png"],
};

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>{children}</div>
    </>
  );
}
