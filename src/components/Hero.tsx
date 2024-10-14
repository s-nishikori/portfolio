import { FC } from "react";
import Link from 'next/link';
import { Button } from './ui/button'
import { Download, Send  } from "lucide-react";
import Devimg from "@/components/Devimg" 
import { Socials } from "./Socials";
import Image from 'next/image'

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
} from 'react-icons/ri'


const Hero: FC = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-background bg-norepeat bg-bottom">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* text */}
          <div className="flex max-w-[600px] flex-col justfy-center mx-auto xl:mx-0 text-center xl">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px] xl:text-left">
              Web Developer
            </div>
            <h1 className="h1">Webエンジニアの錦織です</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              これは私の業務経歴を説明するためのサイトです。
              ご用件のある方はお気軽にお問合せください。
            </p>
            {/* buttons */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button>
                  Contact me <Send size={18} />
                </Button>
              </Link>
            </div>
            {/* Socials */}
            <Socials containerStyles="flex gap-x-6 mx-auto xl:mx-0" iconsStyles="text-foreground text-[22px] hover:text-primary transition-all" />
          </div>
          {/* image */}
          <div className="hidden xl:flex relative">
            <Image src='/engineer.png' width={450} height={400} priority alt="" />
          </div>
        </div>
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
}

export default Hero;