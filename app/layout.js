import './globals.css'


export const metadata = {
  title: 'Hajiyev Samad | Web Developer',
  description: 'Portfolio site',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
