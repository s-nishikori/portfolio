import { FC } from "react";
import { CardDemo } from "@/components/CardDemo";
import { cardData } from "@/components/constants/data";


const Projects: FC = () => {
  return (
    <div>
        <section className="container flex pt-5 grid grid-cols-2 gap-10 xl:grid-cols-3">
            {cardData.map((data) => (
                <CardDemo
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