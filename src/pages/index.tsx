import { Button } from '../components/elements/Button';
import { Tag } from '../components/elements/Tag';
import { Filter } from '../components/elements/Filter';
import { Header } from '../components/elements/Header';
import { ProgressBar } from '../components/elements/ProgressBar';

function Home() {
  return (
    <div>
      {/* <Button type="small" content="버튼" /> */}
      <Tag type="field" color="blue" content="개발" />
      {/* <Filter type="dev" /> */}
      {/* <Header /> */}
      {/* <ProgressBar /> */}
    </div>
  );
}

export default Home;
