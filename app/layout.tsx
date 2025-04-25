import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "アットパーキング - 月極駐車場検索サイト",
  description: "月極駐車場をお探しならアットパーキングにお任せください！",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.difyChatbotConfig = {
                token: 'InqwmyTUlceW5pJC',
                baseUrl: 'https://dify.animastudio.jp'
              }
            `,
          }}
        />
        <script src="https://dify.animastudio.jp/embed.min.js" id="InqwmyTUlceW5pJC" defer />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              #dify-chatbot-bubble-button {
                background-color: #1C64F2 !important;
              }
              #dify-chatbot-bubble-window {
                width: 24rem !important;
                height: 40rem !important;
              }
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
