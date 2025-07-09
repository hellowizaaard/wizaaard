import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Features | Wezard",
    description: "Wizard Features page",
};

export default function FeaturesLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            {children}
        </div>
    );
}
