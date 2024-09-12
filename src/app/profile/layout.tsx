import DefaultLayout from "../layout/DefaultLayout";

export const metadata = {
    title: 'Profile',
    description: 'Profile'
}

function RootLayout({children}: {children: React.ReactNode}) {
    return ( <DefaultLayout>{children}</DefaultLayout> );
}

export default RootLayout;