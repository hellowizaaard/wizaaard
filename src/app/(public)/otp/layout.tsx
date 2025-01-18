import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "OTP | Wezard",
    description: "Wizard Otp page",
};

export default function OtpLayout({
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
