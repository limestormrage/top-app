import { Button, P, Rating, Tag } from "../components";

export default function Home(): JSX.Element {
  return (
    <div>
      <P>Тестируем</P>
      <Button appearance="primary" arrow="down">dasd</Button>
      <Button appearance="ghost" arrow="down">dasd</Button>
      <Tag href="asdas">10</Tag>
      <Tag size="medium" color="primary">20</Tag>
      <Rating rating={3}/>
    </div>
  );
}
