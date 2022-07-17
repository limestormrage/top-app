import { Button, P, Rating, Tag } from "../components";
import { withLayout } from "../layout/Layou";

function Home(): JSX.Element {
  return (
    <>
      <P>Тестируем</P>
      <Button appearance="primary" arrow="down">dasd</Button>
      <Button appearance="ghost" arrow="down">dasd</Button>
      <Tag href="asdas">10</Tag>
      <Tag size="medium" color="primary">20</Tag>
      <Rating rating={3} isEditable setRating={() => console.log('change')}/>
    </>
  );
}

export default withLayout(Home);
