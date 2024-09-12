import DefaultLayout from "../layout/DefaultLayout";

export const metadata = {
    title: 'Explore',
    descriptiom: 'Explore'
}


function RootLayout({children}: {children: React.ReactNode}) {
    return ( <DefaultLayout>{children}</DefaultLayout> );
}

export default RootLayout;