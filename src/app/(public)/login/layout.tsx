import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Login | Wezard",
    description: "Wizard Login page",
};

export default function LoginLayout({
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
