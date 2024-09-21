import { Card } from 'react-bootstrap';
import blueBackButton from '@icons/arrow-back-blue.svg';
import { LinkButton } from '@components/LinkButton.jsx';

export const TimeLineItem = ({ card }) => {
  return (
    <>
      <Card as={'div'} className={'slide-card shadow'}>
        <Card.Img
          className={'featured-image p-3 h-25'}
          variant={'top'}
          src={card.image}
        ></Card.Img>
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>{card.text}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <LinkButton
            to={'/'}
            imgSrc={blueBackButton}
            alt={'back'}
            className={'justify-content-end align-items-center'}
            btnText={'View more'}
          />
        </Card.Footer>
      </Card>
      <h3
        className={
          'slide-date d-flex mx-auto text-center justify-content-center'
        }
      >
        <span className={'px-4 w-25'}>{card.date}</span>
      </h3>
    </>
  );
};
