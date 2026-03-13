import clsx from 'clsx';
import {
  CloudRain,
  Activity,
  Database,
  Settings,
  Shield,
  Server,
  Layers,
  Cpu,
  Network
} from 'lucide-react';

const FUIHeroWithBorders = () => {
  return (
    <section className="relative min-h-[calc(100vh-50px)] overflow-hidden bg-[linear-gradient(to_bottom,#000000,#0A0A0A_40%,#111111_74%,#000000_88%)] dark:bg-[linear-gradient(to_bottom,#000000,#0A0A0A_40%,#111111_74%,#000000_88%)]">

      <div className="absolute left-1/2 top-[calc(100%-90px)]  lg:top-[calc(100%-150px)] h-[500px] w-[700px]   md:h-[500px] md:w-[1100px] lg:h-[750px] lg:w-[100%] -translate-x-1/2 rounded-[100%] border-[#B48CDE] bg-black bg-[radial-gradient(closest-side,#000_82%,#9560EB)]"></div>
      <div className="dark:border-white/10 absolute left-0 top-0 z-0 grid h-full w-full grid-cols-[clamp(28px,10vw,120px)_auto_clamp(28px,10vw,120px)] border-b border-border">
        <div className="col-span-1 flex h-full items-center justify-center" />
        <div className="dark:border-white/10 col-span-1 flex h-full items-center justify-center border-x border-white/10" />
        <div className="col-span-1 flex h-full items-center justify-center" />
      </div>
      <figure className="bg-black pointer-events-none absolute -bottom-[70%] left-1/2 z-0 block aspect-square w-[520px] -translate-x-1/2 rounded-full blur-[200px]" />
      <figure className="bg-black pointer-events-none absolute left-[4vw] top-[64px] z-20 hidden aspect-square w-[32vw] rounded-full opacity-50 blur-[100px] md:block" />
      <figure className="bg-black pointer-events-none absolute bottom-[-50px] right-[7vw] z-20 hidden aspect-square w-[30vw] rounded-full opacity-50 blur-[100px] md:block" />
      <div className="dark:divide-white/10 relative z-10 flex flex-col divide-y divide-white/10 pt-[35px]">
        <div className="flex flex-col items-center justify-end">
          <div className="dark:border-white/10 flex items-center gap-2 border-x border-t border-b-0 border-white/5 px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border border-white flex items-center justify-center rotate-45">
                <div className="w-2 h-2 bg-white rotate-45" />
              </div>
              <span className="text-sm font-bold tracking-tighter uppercase text-white">AI.Agency</span>
            </div>
          </div>
        </div>
        <div>
          <div className="mx-auto flex h-[288px] max-w-[80vw] shrink-0 flex-col items-center justify-center gap-2 px-2 py-4 sm:px-10 lg:px-24">
            <h1 className="text-white text-pretty text-center text-4xl  sm:text-5xl md:text-6xl  lg:text-[clamp(50px,7vw,75px)] font-medium leading-none tracking-[-1.44px] md:max-w-screen-lg md:tracking-[-2.16px]">
              Elevating Brands with AI-Powered Web Experiences
            </h1>
            <h2 className="text-md text-[#FFFFFF] max-w-2xl text-pretty text-center md:text-lg">
              Trusted by experts <br />
              Used by leaders
            </h2>
          </div>
        </div>

        <div className=" dark:divide-white/10 flex items-start justify-center divide-y divide-white/10  px-8 sm:px-24 border-t border-white/10">
          <div className="flex w-full max-w-[80vw] flex-col items-center justify-start md:!max-w-[392px]">
            <a href="/docs" className="cursor-pointer w-full">
              <div
                className={clsx(
                  '!h-14 flex flex-col items-center justify-center rounded-none !text-base',
                  'max-w-sm:!border-x-0 dark:border-white/10 flex w-full !border-x !border-y-0 border-white/10 !bg-transparent backdrop-blur-xl transition-colors duration-150 hover:!bg-black/5 dark:hover:!bg-white/5',
                )}
              >
                <span className="text-white">Learn more</span>
              </div>
            </a>
            <a href="/docs" className="cursor-pointer w-full">
              <div
                className={clsx(
                  'text-white boder-2 !h-14 flex flex-col items-center justify-center rounded-none border-none !text-base',
                  'flex w-full border-[1.2px] border-white/5 bg-gradient-to-tr from-purple-800 via-purple-700 to-purple-400',
                )}
              >
                Get started
              </div>
            </a>
          </div>
        </div>
        <div className="mx-auto max-w-7xl">
          <AnimatedLogoCloud />
        </div>
      </div>

      <style>
        {`
                @keyframes x-slider {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-100%); }
                }
                .animate-x-slider {
                  animation: x-slider 20s linear infinite;
                }
              `}
      </style>
    </section>
  )
}

export default FUIHeroWithBorders;

const logos = [
  { name: 'Vercel', Icon: CloudRain },
  { name: 'Nextjs', Icon: Activity },
  { name: 'Prime', Icon: Database },
  { name: 'Trustpilot', Icon: Settings },
  { name: 'Webflow', Icon: Shield },
  { name: 'Airbnb', Icon: Server },
  { name: 'Tina', Icon: Layers },
  { name: 'Stackoverflow', Icon: Cpu },
  { name: 'Mistral', Icon: Network },
];

const AnimatedLogoCloud = () => {
  return (
    <div className="w-full py-12">
      <div className="mx-auto w-full px-4 md:px-8">
        <div
          className="group relative mt-6 flex gap-6 overflow-hidden p-2"
          style={{
            maskImage:
              'linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)',
            WebkitMaskImage: 'linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)'
          }}
        >
          {Array(5)
            .fill(null)
            .map((_, index) => (
              <div
                key={index}
                className="flex shrink-0 animate-x-slider flex-row justify-around gap-6"
              >
                {logos.map((logo, key) => (
                  <div key={key} className="flex items-center justify-center gap-2 h-10 px-2 flex-none text-white/70">
                    <logo.Icon className="h-6 w-6" />
                    <span className="font-semibold">{logo.name}</span>
                  </div>
                ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
