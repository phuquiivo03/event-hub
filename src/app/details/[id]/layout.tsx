import DefaultLayout from "@/app/layout/DefaultLayout";

export const metadata = {
    title: "About event",
    description: "",
}

function RootLayout({children}: {children: React.ReactNode}) {
    return ( <DefaultLayout>{children}</DefaultLayout> );
}

export default RootLayout;