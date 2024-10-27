import { FC } from "react";
import { CardDemo } from "@/components/CardDemo";
import { cardData } from "@/components/constants/data";


const Projects: FC = () => {
  return (
    <div>
        <h1 className="h1 text-center p-5">My Projects</h1>
        <section className="container flex pt-10 pb-10 grid grid-cols-2 gap-10 xl:grid-cols-3">
            {cardData.map((data, index) => (
                <CardDemo
                    key={index}
                    cardTitle={data.title}
                    cardDescription={data.description}
                    cardContent={data.content}
                    cardFooter={data.footer}
                />
            ))}
        </section>
    </div>
  );
}

export default Projects