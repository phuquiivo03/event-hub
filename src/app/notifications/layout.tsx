import DefaultLayout from "../layout/DefaultLayout";

export const metadata = {
    title: 'Notifications',
    description: 'Notifications'
}

function RootLayout({children}: {children: React.ReactNode}) {
    return ( <DefaultLayout>
        {children}
    </DefaultLayout> );
}

export default RootLayout;