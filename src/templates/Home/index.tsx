import dynamic from 'next/dynamic'
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'
import LinkWrapper from 'components/LinkWrapper'
import { MapProps } from 'components/Map'

import { NextSeo } from 'next-seo'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="Minhas viagens"
        description="Página que reúne os lugares que já visitei e ao clicar no ícone carrega fotos e descrição daquele local"
        canonical=""
        openGraph={{
          images: [
            {
              url: 'public\cover.png',
              width: 1280,
              height:720,
              alt: 'Meu mapa'
            }
          ]
        }}
      />
      <LinkWrapper href="/about">
        <InfoOutline size={36} aria-label="Sobre a página" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}
