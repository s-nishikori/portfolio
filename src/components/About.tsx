import DevImg from "./Devimg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { User2, MailIcon, HomeIcon, PhoneCall, GraduationCap } from "lucide-react"

const About = () => {
  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About me
        </h2>
        <div className="flex flex-col xl:flex-row">
          { /* image */ }
          <div className="hidden xl:flex flex-1 relative">
            <Image src='/engineer2.png' width={450} height={400} priority alt="" />
          </div>
          {/* tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList>
                <TabsTrigger value="personal">自己紹介</TabsTrigger>
                <TabsTrigger value="qualifications">資格</TabsTrigger>
              </TabsList>
              <div className="text-lg mt-12 xl:mt-8">
                <TabsContent value="personal">
                  <ul className="list-disc pl-5">
                    <li className="p-1 leading-6"> 私は5年以上の経験を持つWebエンジニアです。フロントエンドとバックエンドの両方に精通しており、ユーザー体験を最優先に考えたウェブアプリケーションの開発を得意としています。</li>
                    <li className="p-1 leading-6"> 私の専門分野には、HTML、CSS、JavaScript、React、Node.jsなどの最新技術が含まれています。また、データベース設計やAPIの構築、クラウドサービスの利用にも対応できます。これまでに様々なプロジェクトに携わり、効率的でスケーラブルなコードを書き、複雑な問題を解決してきました。</li>
                    <li className="p-1 leading-6"> もし、私のスキルや経験にご興味がありましたら、ぜひお気軽にご連絡ください。共に素晴らしいプロジェクトを作り上げましょう！</li>
                  </ul>
                </TabsContent>
                <TabsContent value="qualifications">
                  <ul className="list-disc pl-5">
                   <li className="p-1 leading-6"> Ruby Association Certified Ruby Programmer Gold version 2.1</li>
                   <li className="p-1 leading-6"> AWS Certified Solutions Architect – Associate</li>
                  </ul>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  )
};

export default About;