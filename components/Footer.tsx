import Image from 'next/image'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-8 flex flex-col items-center gap-4 text-sm text-gray-500 dark:text-gray-400  sm:flex-row">
          <a
            href="http://www.beian.gov.cn/portal/registerSystemInfo"
            target="_blank"
            className="flex items-center gap-0.5"
          >
            <Image
              src="/static/images/police-badge.png"
              alt=""
              className="inline-block"
              width={16}
              height={17}
            />
            <span className="hover:text-primary-500">豫公网安备 41022502000131号</span>
          </a>

          <a href="http://beian.miit.gov.cn/" target="_blank" className="hover:text-primary-500">
            豫ICP备2024067599号-1
          </a>
        </div>
      </div>
    </footer>
  )
}
