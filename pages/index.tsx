import { useState } from 'react';
import { Button, Heading, Paragpaph, Rating, Tag } from '../components';
import { withLayout } from '../Layout/Layout';

function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(3);
  console.log(rating);

  return (
    <>
      <Heading tag={'h1'}>Heading h1</Heading>
      <Heading tag={'h2'}>Heading h2</Heading>
      <Heading tag={'h3'}>Heading h3</Heading>
      <Button appereance='primary' arrow='right'>
        Узнать подробнее
      </Button>
      <Button appereance='ghost' arrow='down'>
        Читать отзывы
      </Button>
      <Paragpaph size='large'>Paragpaph large</Paragpaph>
      <Paragpaph>Paragpaph medium</Paragpaph>
      <Paragpaph size='small'>Paragpaph small</Paragpaph>
      <Tag size='medium' color='warning'>
        Tag medium component
      </Tag>
      <Tag color='grey'>Tag component</Tag>
      <Tag size='medium'>Tag medium component</Tag>
      <Tag color='primary' href='https://google.com'>
        Tag component
      </Tag>
      <Tag color='success'>Tag component</Tag>
      <Rating rating={1} />
      <Rating rating={4} />
      <Rating rating={rating} isEditable setRating={setRating} />
    </>
  );
}

export default withLayout(Home);
