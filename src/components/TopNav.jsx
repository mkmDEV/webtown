import { Stack } from 'react-bootstrap';
import { LinkButton } from '@components/LinkButton';

import blueBackButton from '@icons/arrow-back-blue.svg';

export const TopNav = () => {
  const Title = () => (
    <h1 className={'title position-relative'}>
      Financial sector development timeline
    </h1>
  );

  return (
    <Stack
      as={'nav'}
      dir={'ltr'}
      className={
        'justify-content-between border-bottom flex-column flex-lg-row mt-4 mx-5'
      }
    >
      <LinkButton
        to={'/'}
        imgSrc={blueBackButton}
        className={'justify-content-center align-items-center'}
        alt={'back'}
        btnText={'View all'}
      />
      <Title />
    </Stack>
  );
};
