import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Register | Wezard",
    description: "Wizard Register page",
};

export default function RegisterLayout({
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
