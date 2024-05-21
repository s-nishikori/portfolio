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
              <Button variant="outline" className="border-solid border-2 border-gray-700">
                  <a href={props.cardContent} target="_blank">
                      Usage {props.cardTitle}
                  </a>
              </Button>
          </CardContent>
          <CardFooter>
              <p>{props.cardFooter}</p>
          </CardFooter>
      </Card>
  );
};