import * as React from 'react';
export const Seo = (
  {
    children,
    description,
    title = 'Advance',
    url = 'https://advance.ru',
    keywords,
    hideFromRobots = false
  }
) => (
  <>
    {children}

    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=contain" />
    <meta name="format-detection" content="telephone=no" />
    <link rel="canonical" href="index.html" />
    <link rel="icon" type="image/svg+xml" href="https://fs.advance.ru/landing-pages/icons/favicon.svg" />
    {description && <meta name="description" content={description} />}
    {title && <meta property="og:title" content={title} />}
    {description && <meta property="og:description" content={description} />}
    <meta property="og:type" content="website" />
    <meta property="og:locale" content='ru_RU' />
    <meta property="og:url" content={url} />
    <meta property="og:site_name" content="Центр образовательных технологий Advance" />
    <meta name="twitter:card" content="summary_large_image" />
    {title && <meta name="twitter:title" content={title} />}
    {description && <meta name="twitter:description" content={description} />}
    <meta name="twitter:image:src"
          content="https://fs.advance.ru/landing-pages/icons/advance-logo/og-logo_vk_1920x900.png" />
    <meta property="og:image"
          content="https://fs.advance.ru/landing-pages/icons/advance-logo/og-logo_vk_1920x900.png" />
    {keywords && <meta name="keywords" content={keywords} />}

    { hideFromRobots && <meta name="robots" content="noindex, nofollow" />}
  </>
)
