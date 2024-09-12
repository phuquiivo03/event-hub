import DefaultLayout from "../layout/DefaultLayout";

export const metadata = {
    title: 'message',
    description: 'message'
}
function RootLayout({children}: {children: React.ReactNode}) {
    return ( <DefaultLayout>{children}</DefaultLayout> );
}

export default RootLayout;