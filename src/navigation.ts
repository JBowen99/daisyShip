export const NavbarData = {
    links: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Services',
            href: '/',
            links: [
                {
                    text: 'Service 1',
                    href: '/services#service1'
                },
                {
                    text: 'Service 2',
                    href: '/services#service2'
                },
            ]
        },
        {
            text: 'Pricing',
            href: '/pricing'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
    ]
}