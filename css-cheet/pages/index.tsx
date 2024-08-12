
import Link from 'next/link';
import React, { useState, useEffect } from 'react'

// お知らせに表示するリスト
const initialNotices = [
  { id: 1, title: "新しくCSSコンテンツをまとめたサイトを公開しました。", date: "2024-08-01"},
  { id: 2, title: "新しく〇〇のコンテンツを追加しました。", date: "2024-08-05" },
  { id: 3, title: "新しく〇〇のコンテンツを追加しました。", date: "2024-08-06" },
  { id: 4, title: "新しく〇〇のコンテンツを追加しました。", date: "2024-08-07" },
  { id: 5, title: "新しく〇〇のコンテンツを追加しました。", date: "2024-08-08" },
];


function Home() {
  const [notices, setNotices] = useState([])

  useEffect(() => {
    setNotices(initialNotices)
  }, [])
  return (
    <>
      <header>
        <h1 className='text-2xl'><Link href="/">テンプレート一覧</Link></h1>
      </header>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 lg:w-1/4 md:w-1/2 w-full">
              <Link href="/selectors">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg text-indigo-500 hover:text-white py-2 px-4 uppercase rounded bg-white border border-indigo-500 hover:bg-indigo-600 shadow-none hover:shadow-lg font-medium transition duration-200">Selectors</div>
              </Link>
            </div>
            <div className="p-2 lg:w-1/4 md:w-1/2 w-full">
              <Link href="/box-model">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg text-green-500 hover:text-white py-2 px-4 uppercase rounded bg-white border border-green-500 hover:bg-green-600 shadow-none hover:shadow-lg font-medium transition duration-200">Box Model</div>
              </Link>
            </div>
            <div className="p-2 lg:w-1/4 md:w-1/2 w-full">
              <Link href="/flexbox">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg text-red-500 hover:text-white py-2 px-4 uppercase rounded bg-white border border-red-500 hover:bg-red-600 shadow-none hover:shadow-lg font-medium transition duration-200">Flexbox</div>
              </Link>
            </div>
            <div className="p-2 lg:w-1/4 md:w-1/2 w-full">
             <Link href="/grid">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg text-yellow-500 hover:text-white py-2 px-4 uppercase rounded bg-white border border-yellow-500 hover:bg-yellow-600 shadow-none hover:shadow-lg font-medium transition duration-200">Grid</div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 後でここはコンポーネント化する */}
      <section className='pt-2 w-1/2 mx-auto flex'>
        <div className='flex flex-col pr-5'>
          <h2 className='text-lg'>更新内容</h2>
        </div>
        <div className='border-l-2 pl-5 border-green-400'>
          <ul>
            {notices.map(notice => (
              <li key={notice.id} className='flex'>
                <p className='pr-3 text-gray-500'>{notice.date}</p>
                <p>{notice.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default Home;