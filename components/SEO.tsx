// components/SEO.tsx
import Head from "next/head";

interface Props {
  title: string;
  description: string;
  url: string;
}

export default function SEO({ title, description, url }: Props) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
    </Head>
  );
}
