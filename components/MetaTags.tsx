import Head from 'next/head'

type PropTypes = {
    title: string
}

export const MetaTags = ({ title }: PropTypes) => {
    return (
        <Head>
            <title>{title}</title>
        </Head>
    )
}