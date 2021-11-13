import Head from 'next/head'
import Image from 'next/image'

import NameCard from '../components/index/NameCard'
import Appbar from '../components/appBar'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faBuilding, faMapMarkedAlt, faCommentDots } from '@fortawesome/free-solid-svg-icons'
import { ToastProvider, useToasts } from 'react-toast-notifications'

import datas from '../data/datas'

const About = () => {

  return (
    <ToastProvider>
      <Appbar fixed/>
      <div className="lg:flex left-auto right-auto">
        <div className="lg:w-1/3">
          <section className="pt-10 w-4/5 max-w-5xl mx-auto flex items-center justify-center flex-col">
            <Image src="/images/icon.png" width={200} height={200} />
            <p className="text-2xl font-bold mt-4">カズ之助</p>
            <div className="flex space-x-2 justify-center items-center">
              <p className="text-sm text-gray-600">@kazuki19992</p>
              <p className="text-sm text-gray-600">@Tech_Kazu</p>
            </div>
          </section>
          <section className="mt-5 mb-10 container mx-auto flex items-center justify-center space-x-2 flex-wrap lg:text-left">
            <img src="https://img.shields.io/badge/Highschool-passed(Taira--THS at Fukushima)-4EC722.svg?logo=&style=flat-square" />
            <img src="https://img.shields.io/badge/University-75%25(Nihon--Univ)-95C40A.svg?logo=&style=flat-square" />
            <img src="https://img.shields.io/badge/Job%20hunting-passed-4EC722.svg?logo=&style=flat-square" />
            <a href="https://twitter.com/Tech_Kazu" target="_blank" rel="noreferrer">
              <img src="https://camo.githubusercontent.com/ad1576177e7bdbb17258a7967447c9f8b6e6234c9d1a17abcdff79f0e6a24c47/68747470733a2f2f696d672e736869656c64732e696f2f747769747465722f666f6c6c6f772f546563685f4b617a753f636f6c6f723d626c7565266c6162656c3d54776974746572253230466f6c6c6f77657273266c6f676f436f6c6f723d626c7565267374796c653d666c61742d737175617265" />
            </a>
            <a href="https://zenn.dev/Tech_Kazu" target="_blank" rel="noreferrer">
              <img src="https://img.shields.io/badge/Zenn-kazuki19992-0F83FD.svg?logo=Zenn&style=flat-square" />
            </a>
            <a href="mailto:kushida98@gmail.com" target="_blank" rel="noreferrer">
              <img src="https://img.shields.io/badge/mail-mailto:kushida98@gmail.com-aaaaaa.svg?logo=GMail&style=flat-square" />
            </a>
            <img src="https://img.shields.io/badge/-Next.js-6BC8E6.svg?logo=Next.js&style=popout" />
            <img src="https://img.shields.io/badge/-tailwindcss-eeeeee.svg?logo=tailwindcss&style=popout" />
          </section>
        </div>

        <div>
          {/* スキル */}
          <section className="mt-10 container mx-auto">
            <h1 className="text-left text-3xl font-bold">できそうなこと</h1>
          </section>
          <section className="my-5 container mx-auto flex items-center justify-center">
            <div className="flex justify-center flex-wrap item-center space-x-2">
              <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                <div>
                  <Image src="/images/skills/react.svg" className="skillImage" width={45} height={45} objectFit="contain" />
                </div>
              </a>
              <a href="https://www.electronjs.org/" target="_blank" rel="noreferrer">
                <div>
                  <Image src="/images/skills/electron.svg" className="skillImage" width={45} height={45} objectFit="contain" />
                </div>
              </a>
              <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
                <div>
                  <Image src="/images/skills/nextjs.svg" className="skillImage" width={45} height={45} objectFit="contain" />
                </div>
              </a>
              <a href="https://jp.vuejs.org/index.html" target="_blank" rel="noreferrer">
                <div>
                  <Image src="/images/skills/vue.svg" className="skillImage" width={45} height={45} objectFit="contain" />
                </div>
              </a>
              <a href="https://developer.mozilla.org/ja/docs/Web/JavaScript" target="_blank" rel="noreferrer">
                <div>
                  <Image src="/images/skills/js.svg" className="skillImage" width={45} height={45} objectFit="cover" quality={100} />
                </div>
              </a>
              <a href="https://nodejs.org/ja/" target="_blank" rel="noreferrer">
                <div>
                  <Image src="/images/skills/node.svg" className="skillImage" width={45} height={45} objectFit="contain" quality={100} />
                </div>
              </a>
              <a href="http://www.htmq.com/html5/" target="_blank" rel="noreferrer">
                <div>
                  <Image src="/images/skills/html.svg" className="skillImage" width={45} height={45} objectFit="contain" quality={100} />
                </div>
              </a>
              <a href="http://www.htmq.com/css3/" target="_blank" rel="noreferrer">
                <div>
                  <Image src="/images/skills/css.svg" className="skillImage" width={45} height={45} objectFit="contain" quality={100} />
                </div>
              </a>
              <a href="https://www.php.net/" target="_blank" rel="noreferrer">
                <div>
                  <Image src="/images/skills/php.svg" className="skillImage" width={45} height={45} objectFit="contain" />
                </div>
              </a>
              <a href="https://www.java.com/ja/" target="_blank" rel="noreferrer">
                <div>
                  <Image src="/images/skills/java.svg" className="skillImage" width={45} height={45} objectFit="contain" />
                </div>
              </a>
              <a href="https://docs.microsoft.com/ja-jp/dotnet/csharp/" target="_blank" rel="noreferrer">
                <div>
                  <Image src="/images/skills/c-sharp.svg" className="skillImage" width={45} height={45} objectFit="contain" />
                </div>
              </a>
              <a href="https://docs.python.org/ja/3/" target="_blank" rel="noreferrer">
                <div>
                  <Image src="/images/skills/python.svg" className="skillImage" width={45} height={45} objectFit="contain" />
                </div>
              </a>
              <a href="https://github.com/bminor/bash" target="_blank" rel="noreferrer">
                <div>
                  <Image src="/images/skills/bash.svg" className="skillImage" width={45} height={45} objectFit="contain" />
                </div>
              </a>
              <a href="https://www.docker.com/" target="_blank" rel="noreferrer">
                <div>
                  <Image src="/images/skills/docker.svg" className="skillImage" width={45} height={45} objectFit="contain" />
                </div>
              </a>
              <a href="https://www.mysql.com/jp/" target="_blank" rel="noreferrer">
                <div>
                  <Image src="/images/skills/mysql.svg" className="skillImage" width={45} height={45} objectFit="contain" />
                </div>
              </a>
              <a href="https://www.raspberrypi.org/" target="_blank" rel="noreferrer">
                <div>
                  <Image src="/images/skills/raspberry-pi.svg" className="skillImage" width={45} height={45} objectFit="contain" />
                </div>
              </a>
              <a href="https://www.adobe.com/jp/products/xd.html?sdid=19SCDRPN&mv=search&ef_id=Cj0KCQjw-NaJBhDsARIsAAja6dNwa_tgnr6JQ5jcFuaRI7Om1PxaAPHwdcXhLip4J8dxtGIX8fVYAY4aAr-xEALw_wcB:G:s&s_kwcid=AL!3085!3!341513906623!b!!g!!%2Bxd!1641270155!61553403566" target="_blank" rel="noreferrer">
                <div>
                  <Image src="/images/skills/xd.svg" className="skillImage" width={45} height={45} objectFit="contain" />
                </div>
              </a>
              <a href="http://spring-fragrance.mints.ne.jp/aviutl/" target="_blank" rel="noreferrer">
                <div>
                  <Image src="/images/skills/aviutl.png" className="skillImage" width={45} height={45} objectFit="contain" />
                </div>
              </a>
              <a href="https://ja.wikipedia.org/wiki/%E6%97%A5%E6%9C%AC%E8%AA%9E" target="_blank" rel="noreferrer">
                <div>
                  <Image src="/images/skills/japanese.svg" className="skillImage" width={45} height={45} objectFit="contain" />
                </div>
              </a>
            </div>
          </section>

          <section className="mt-10 container mx-auto">
            <h1 className="text-left text-3xl font-bold">持ってる資格</h1>
          </section>
          <section className="container mx-auto my-5">
            <ul className="list-disc list-inside">
              <li className="list-item">第一種普通自動車運転免許</li>
              <li className="list-item">応用情報技術者</li>
              <li className="list-item">基本情報技術者</li>
            </ul>
          </section>

          {/* コンタクト */}
          <section className="mt-10 container mx-auto">
            <h1 className="text-left text-3xl font-bold">コンタクト</h1>
          </section>
          <section className="my-5 container mx-auto flex items-center justify-center">
            <div className="flex justify-center flex-wrap item-center space-x-4">
              <DiscordButton />
              <a href="https://twitter.com/Tech_Kazu" target="_blank" rel="noreferrer">
                <div className="flex flex-col justify-center items-center">
                  <FontAwesomeIcon icon={faTwitter} size="3x" />
                  <p className="text-sm">@{datas.twitter}</p>
                </div>
              </a>
              <a href="https://github.com/kazuki19992" target="_blank" rel="noreferrer">
                <div className="flex flex-col justify-center items-center">
                  <FontAwesomeIcon icon={faGithub} size="3x" />
                  <p className="text-sm">{datas.github}</p>
                </div>
              </a>
              <a href="https://zenn.dev/kazuki19992" target="_blank" rel="noreferrer">
                <div className="flex flex-col justify-center items-center">
                  <img src="/images/contacts/zenn.svg" width={49.4}/>
                  <p className="text-sm">{datas.zenn}</p>
                </div>
              </a>
              <a href="https://kazuki19992.page" target="_blank" rel="noreferrer">
                <div className="flex flex-col justify-center items-center">
                  <FontAwesomeIcon icon={faCommentDots} size="3x" />
                  <p className="text-sm">{datas.blog}</p>
                </div>
              </a>
            </div>
          </section>

          <section className="mt-10 container mx-auto">
            <h2 className="text-left text-3xl font-bold">Discord-Server</h2>
          </section>
          <section className="my-5 container mx-auto flex items-center justify-center space-x-3">
            <a href="https://discord.gg/QDcv6xNKpN" target="_blank" rel="noreferrer">
              <div className="flex rounded-md bg-indigo-500 text-white p-3 shadow-md space-x-2 items-center">
                <FontAwesomeIcon icon={faDiscord} size="2x" />
                <div className="flex justify-center items-center flex-col">
                  <p className="text-sm w-full">Join us on</p>
                  <p className="text-md font-bold">カズ之助さんどぼっくす</p>
                </div>
              </div>
            </a>
            <a href="https://discord.gg/XpA3StwwTm" target="_blank" rel="noreferrer">
              <div className="flex rounded-md bg-indigo-500 text-white p-3 shadow-md space-x-2 items-center">
                <FontAwesomeIcon icon={faDiscord} size="2x" />
                <div className="flex justify-center items-center flex-col">
                  <p className="text-sm w-full">Join us on</p>
                  <p className="text-md font-bold">インフラ同好会</p>
                </div>
              </div>
            </a>

          </section>

          <div className="my-5"></div>
        </div>
      </div>
    </ToastProvider>
  )
}

const DiscordButton = () => {
  const { addToast } = useToasts()

  // クリップボードに任意のテキストをコピーする
  function copyTextToClipboard(text, complete) {
    navigator.clipboard.writeText(text)
    .then(function() {
      console.log('Async: Copying to clipboard was successful!');
      addToast(complete, {
        appearance: 'success',
        autoDismiss: true
      })

    }, function(err) {
      console.error('Async: Could not copy text: ', err);
      addToast("コピー時に何らかのエラーが発生しました！すまん", {
        appearance: 'error',
        autoDismiss: true
      })
    });
  }
  return (
    <div className="flex flex-col justify-center items-center" onClick={() => {copyTextToClipboard(datas.discord, "カズ之助のDiscord IDをコピーしたよ！")}} style={{cursor: 'pointer'}}>
      <FontAwesomeIcon icon={faDiscord} size="3x" />
      <p className="text-sm">{datas.discord}</p>
    </div>
  )
}

export default About