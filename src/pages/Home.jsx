import Button from '../Button/Button';
import Header from '../components/Header/Header';

const Home = () => (
  <div>
    <Header left={<Button text='<' />} right={<Button text='>' />} title='hi' />
    <Button type='negative' text='hi' />
  </div>
);

export default Home;
