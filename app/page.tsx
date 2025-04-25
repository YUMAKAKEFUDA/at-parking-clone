import Image from "next/image"
import Link from "next/link"
import { Search } from "lucide-react"

export default function AtParking() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="flex flex-col items-center border-b">
        <div className="w-full max-w-5xl py-2">
          <Link href="/">
            <Image
              src="/placeholder.svg?height=40&width=330"
              alt="アットパーキング"
              width={330}
              height={40}
              className="mx-auto"
            />
          </Link>
        </div>
        <nav className="w-full bg-[#5cb531] text-white text-sm">
          <div className="max-w-5xl mx-auto flex justify-between px-4 py-2">
            <Link href="#" className="hover:underline">
              ご利用の流れ
            </Link>
            <Link href="#" className="hover:underline">
              よくあるご質問
            </Link>
            <Link href="#" className="hover:underline">
              掲載のお申し込みは
            </Link>
            <Link href="#" className="hover:underline">
              会社概要
            </Link>
            <Link href="#" className="hover:underline">
              管理会社様向け
            </Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-5xl mx-auto w-full px-4 py-6">
        <h1 className="text-center text-lg mb-6">月極駐車場をお探しならアットパーキングにお任せください！</h1>

        {/* Search Section */}
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          {/* Map Section */}
          <div className="flex-1">
            <div className="border rounded p-2 mb-4">
              <div className="flex items-center gap-2 bg-[#f8f8f8] p-2 rounded mb-2">
                <Search className="text-gray-500 w-5 h-5" />
                <span className="font-bold text-sm">全国都道府県から月極駐車場を探す</span>
              </div>
              <div className="text-xs text-gray-600 mb-2 px-2">
                お探しのエリアをクリックして該当の駐車場情報をまとめてみることができます。
              </div>
              <div className="bg-[#f0f8e8] p-2 text-xs text-center mb-2">
                <div>掲載駐車場の総件数</div>
                <div className="font-bold text-base">
                  全国の掲載件数 <span className="text-[#5cb531]">55,273</span> 件
                </div>
              </div>

              <div className="relative">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="日本地図"
                  width={600}
                  height={400}
                  className="w-full"
                />

                {/* Region Labels - These would be positioned absolutely in a real implementation */}
                <div className="text-xs">
                  <div className="absolute top-[100px] right-[150px] text-center">
                    <div className="font-bold">北海道</div>
                    <div>北海道</div>
                  </div>
                  <div className="absolute top-[200px] right-[150px] text-center">
                    <div className="font-bold">東北</div>
                    <div>青森 岩手</div>
                    <div>宮城 秋田</div>
                    <div>山形 福島</div>
                  </div>
                  {/* Other regions would be positioned similarly */}
                </div>
              </div>
            </div>

            {/* Car Icon Section */}
            <div className="mb-6">
              <h2 className="text-lg mb-2">このような駐車場をお探しですか？</h2>
              <div className="flex gap-4 items-start">
                <div className="relative mt-2">
                  <div className="bg-white rounded-full border-2 border-red-500 p-2">
                    <Image src="/placeholder.svg?height=40&width=40" alt="車アイコン" width={40} height={40} />
                  </div>
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-2 h-8 bg-red-500"></div>
                  </div>
                </div>
                <div className="text-sm">
                  <p>アットパーキングの掲載物件で、お客様のお車情報にぴったりの駐車場をさがせていただけます！</p>
                  <p>
                    お客様に最適なエリアからのお車の駐車場、手ごろな料金の駐車場探しなどご希望に沿った駐車場をいろいろお探しいただけます。ご希望の駐車場が見つかりましたらご連絡ください。
                  </p>
                </div>
              </div>
            </div>

            {/* Information Box */}
            <div className="border border-[#5cb531] rounded p-4 mb-6">
              <div className="flex gap-4">
                <div className="flex-1">
                  <h3 className="font-bold text-[#5cb531] mb-2">月極駐車場検索アットパーキングとは</h3>
                  <p className="text-sm mb-2">
                    「アットパーキング」では、月極駐車場を手軽に、時間と場所を気にせずに検索することができます。
                  </p>
                  <p className="text-sm mb-2">
                    ここが便利です。駐車場が契約せずに検討できるのは「
                    <Link href="#" className="text-[#5cb531] underline">
                      お問合せのみ
                    </Link>
                    」で確認いただけます。
                  </p>
                  <p className="text-sm">
                    ご希望の駐車場が見つかりましたら、お気軽にお問合せください。お客様のご希望に合わせて、駐車場のお探し方法、実際のお見積もり、契約のことなど、駐車場のスタッフがお客様のご希望に沿ってお答えさせていただきます。
                  </p>
                </div>
                <div className="w-1/4">
                  <Image src="/placeholder.svg?height=200&width=150" alt="スタッフ" width={150} height={200} />
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-full md:w-64 space-y-4">
            {/* Premium Parking Banner */}
            <div className="border rounded overflow-hidden">
              <div className="bg-[#333] text-white p-2 text-center">
                <p className="text-sm">10台以上の駐車場</p>
                <p className="text-sm">をお探しの方は</p>
                <p className="text-sm">弊社の専任エージェントが</p>
                <p className="text-sm">お手伝いいたします</p>
              </div>
              <div className="bg-white p-2 relative">
                <Image src="/placeholder.svg?height=100&width=200" alt="エージェント" width={200} height={100} />
                <div className="absolute top-2 right-2 bg-yellow-400 rounded-full p-1 text-xs font-bold">
                  <div>相談費用</div>
                  <div>無料</div>
                </div>
              </div>
              <div className="bg-white p-2 text-center">
                <Link href="#" className="bg-blue-600 text-white block py-2 rounded">
                  詳細はこちら ▶
                </Link>
              </div>
            </div>

            {/* Map Search */}
            <div className="border rounded overflow-hidden">
              <div className="bg-white p-2">
                <div className="flex items-center gap-2 mb-2">
                  <Search className="text-gray-500 w-5 h-5" />
                  <span className="text-sm font-bold">地図から検索</span>
                </div>
                <Image
                  src="/placeholder.svg?height=160&width=240"
                  alt="地図検索"
                  width={240}
                  height={160}
                  className="mb-2"
                />
                <p className="text-xs mb-1">※ 移動・拡大をおこなってクリック！</p>
                <div className="bg-gray-100 p-2 text-xs">
                  <p>地図を移動させる</p>
                </div>
                <div className="bg-[#ff6600] text-white text-center p-2 mt-2">
                  <span className="text-sm font-bold">駐車場を地図から検索</span>
                </div>
              </div>
            </div>

            {/* Banners */}
            <div className="space-y-2">
              <Link href="#">
                <Image
                  src="/placeholder.svg?height=60&width=240"
                  alt="バナー1"
                  width={240}
                  height={60}
                  className="w-full"
                />
              </Link>
              <Link href="#">
                <Image
                  src="/placeholder.svg?height=60&width=240"
                  alt="バナー2"
                  width={240}
                  height={60}
                  className="w-full"
                />
              </Link>
              <Link href="#">
                <Image
                  src="/placeholder.svg?height=60&width=240"
                  alt="バナー3"
                  width={240}
                  height={60}
                  className="w-full"
                />
              </Link>
            </div>

            {/* News Section */}
            <div className="border rounded p-2">
              <h3 className="font-bold text-sm mb-2">新着コラム</h3>
              <div className="space-y-2 text-xs">
                <div>
                  <div className="text-gray-500">2023/12/21</div>
                  <Link href="#" className="text-[#5cb531] hover:underline">
                    月極・バイク置き場の費用相場はいくら？特徴や注意点・料金相場を解説するコラム記事
                  </Link>
                </div>
                <div>
                  <div className="text-gray-500">2023/12/14</div>
                  <Link href="#" className="text-[#5cb531] hover:underline">
                    月極・EV充電設備完備で快適なメリット・デメリットにおける3つの理由について解説を始める
                  </Link>
                </div>
                <div>
                  <div className="text-gray-500">2023/11/21</div>
                  <Link href="#" className="text-[#5cb531] hover:underline">
                    コインパーキングか月極駐車場を選択する際、どちらが得算になっている？
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Partner Services */}
        <div className="border-t pt-4 mb-8">
          <h3 className="text-center mb-4">弊社運営のサービス一覧</h3>
          <div className="flex justify-center gap-8">
            <Link href="#" className="flex flex-col items-center">
              <Image src="/placeholder.svg?height=60&width=120" alt="駅前会議室" width={120} height={60} />
              <span className="text-xs text-[#5cb531] hover:underline">会議室・セミナー・研修会場を探す</span>
            </Link>
            <Link href="#" className="flex flex-col items-center">
              <Image src="/placeholder.svg?height=60&width=120" alt="InSquare" width={120} height={60} />
              <span className="text-xs text-[#5cb531] hover:underline">駅前のインフォメーション施設を探す</span>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#5cb531] text-white">
        <div className="max-w-5xl mx-auto py-8">
          <div className="grid grid-cols-4 gap-4 mb-8 text-xs">
            <div>
              <h4 className="font-bold mb-2">北海道・東北の月極駐車場</h4>
              <ul className="space-y-1">
                <li>
                  <Link href="#" className="hover:underline">
                    北海道
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    青森県
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    岩手県
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    宮城県
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    秋田県
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    山形県
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    福島県
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">関東の月極駐車場</h4>
              <ul className="space-y-1">
                <li>
                  <Link href="#" className="hover:underline">
                    茨城県
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    栃木県
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    群馬県
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    埼玉県
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    千葉県
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    東京都
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    神奈川県
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    山梨県
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">中部の月極駐車場</h4>
              <ul className="space-y-1">
                <li>
                  <Link href="#" className="hover:underline">
                    新潟県
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    富山県
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    石川県
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    福井県
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    長野県
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    岐阜県
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    静岡県
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    愛知県
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    三重県
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">近畿の月極駐車場</h4>
              <ul className="space-y-1">
                <li>
                  <Link href="#" className="hover:underline">
                    滋賀県
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    京都府
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    大阪府
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    兵庫県
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    奈良県
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    和歌山県
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4 mb-8 text-xs">
            <div>
              <h4 className="font-bold mb-2">四国の月極駐車場</h4>
              <ul className="space-y-1">
                <li>
                  <Link href="#" className="hover:underline">
                    徳島県
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    香川県
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    愛媛県
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    高知県
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">中国の月極駐車場</h4>
              <ul className="space-y-1">
                <li>
                  <Link href="#" className="hover:underline">
                    鳥取県
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    島根県
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    岡山県
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    広島県
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    山口県
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">九州の月極駐車場</h4>
              <ul className="space-y-1">
                <li>
                  <Link href="#" className="hover:underline">
                    福岡県
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    佐賀県
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    長崎県
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    熊本県
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    大分県
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    宮崎県
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    鹿児島県
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    沖縄県
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t pt-4">
            <div className="flex justify-center gap-4 text-xs mb-4">
              <Link href="#" className="hover:underline">
                月極駐車場検索トップ
              </Link>
              <Link href="#" className="hover:underline">
                会社概要
              </Link>
              <Link href="#" className="hover:underline">
                個人情報保護方針
              </Link>
              <Link href="#" className="hover:underline">
                個人情報の取り扱いについて
              </Link>
              <Link href="#" className="hover:underline">
                利用規約についてのお問い合わせ
              </Link>
            </div>
            <div className="flex justify-center gap-4 text-xs mb-4">
              <Link href="#" className="hover:underline">
                駐車場管理会社様へのご案内
              </Link>
              <Link href="#" className="hover:underline">
                掲載についてのお問い合わせ
              </Link>
              <Link href="#" className="hover:underline">
                サイトマップ
              </Link>
            </div>
            <div className="text-center text-xs">Copyright (C) 2010-2023 At Parking Co.,Ltd. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
