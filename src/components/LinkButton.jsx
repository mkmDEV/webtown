import { Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const LinkButton = ({ to, imgSrc, alt, btnText, className }) => (
  <Link to={to} className={`no-underline d-flex ${className}`}>
    <Image src={imgSrc} alt={alt} />
    <Button variant={'link'}>{btnText}</Button>
  </Link>
);
