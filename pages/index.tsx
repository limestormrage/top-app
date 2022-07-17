import { Button, P, Rating, Tag } from "../components";
import { Layout } from "../layout/Layou";

export default function Home(): JSX.Element {
  return (
    <Layout>
      <P>Тестируем</P>
      <Button appearance="primary" arrow="down">dasd</Button>
      <Button appearance="ghost" arrow="down">dasd</Button>
      <Tag href="asdas">10</Tag>
      <Tag size="medium" color="primary">20</Tag>
      <Rating rating={3} isEditable setRating={() => console.log('change')}/>
    </Layout>
  );
}
