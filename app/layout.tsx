import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '副業ノート',
  description: '副業・在宅ワーク情報',
  keywords: '副業ノート,副業・在宅ワーク情報',
  openGraph: {
    title: '副業ノート',
    description: '副業・在宅ワーク情報',
    type: 'website',
    locale: 'ja_JP',
    siteName: '副業ノート',
  },
  twitter: {
    card: 'summary_large_image',
    title: '副業ノート',
    description: '副業・在宅ワーク情報',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <meta name="google-site-verification" content="8c64b1447c588760" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-SVQXY5C3PW"></script>
        <script dangerouslySetInnerHTML={{__html:`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-SVQXY5C3PW');`}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html:`{"@context": "https://schema.org", "@type": "WebSite", "name": "副業ノート", "description": "副業・在宅ワーク情報", "url": "https://side-job-jp.vercel.app", "publisher": {"@type": "Organization", "name": "AOKAE合同会社", "url": "https://colorpass-web.vercel.app"}, "potentialAction": {"@type": "SearchAction", "target": "https://side-job-jp.vercel.app/blog/{search_term_string}", "query-input": "required name=search_term_string"}}`}} />
      </head>
      <body>{children}</body>
    </html>
  )
}
