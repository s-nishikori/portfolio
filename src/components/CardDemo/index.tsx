import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FC } from "react";

type Props = {
  cardTitle: string;
  cardDescription: string;
  cardContent: string;
  cardFooter: string;
};

export const CardDemo: FC<Props> = (props) => {
  return (
      <Card>
          <CardHeader className="h-32">
              <CardTitle>{props.cardTitle}</CardTitle>
              <CardDescription>{props.cardDescription}</CardDescription>
          </CardHeader>
          <CardContent>
              <Button>
                  <a href={props.cardContent} target="_blank">
                      詳細を見る
                  </a>
              </Button>
          </CardContent>
          <CardFooter>
              <p>{props.cardFooter}</p>
          </CardFooter>
      </Card>
  );
};