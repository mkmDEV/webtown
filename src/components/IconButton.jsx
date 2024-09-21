import { Button, Image } from 'react-bootstrap';

export const IconButton = ({ imgSrc, onClick, disabled }) => (
  <Button
    className={'px-3 d-flex'}
    variant='outline-secondary'
    size={'sm'}
    onClick={onClick}
    disabled={disabled}
  >
    <Image src={imgSrc} />
  </Button>
);
