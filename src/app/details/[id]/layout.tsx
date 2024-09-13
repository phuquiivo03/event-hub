import DefaultLayout from "@/app/layout/DefaultLayout";

function RootLayout({children}: {children: React.ReactNode}) {
    return ( <DefaultLayout>{children}</DefaultLayout> );
}

export default RootLayout;