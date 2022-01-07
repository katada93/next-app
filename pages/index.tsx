import axios from 'axios';
import { GetStaticProps } from 'next';
import { useState } from 'react';
import { Button, Heading, Paragpaph, Rating, Tag } from '../components';
import { MenuItem } from '../interfaces/menu.interface';
import { withLayout } from '../Layout/Layout';

function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(3);

  return (
    <>
      <Heading tag={'h3'}>Heading h3</Heading>
      <Button appereance='primary' arrow='right'>
        Узнать подробнее
      </Button>
      <Paragpaph size='large'>Paragpaph large</Paragpaph>
      <Tag color='primary' href='https://google.com'>
        Tag component
      </Tag>
      <Tag color='success'>Tag component</Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
    </>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
    { firstCategory }
  );

  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}

export default withLayout(Home);
