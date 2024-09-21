import { Card, Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Masonry from 'react-masonry-css';

import '@styles/masonry.css';
import images from '@images';

const breakpoints = {
  default: 5,
  992: 4,
  768: 3,
  576: 2,
  425: 1,
};

export const MasonryPage = () => {
  return (
    <Container className={'m-0 p-0'} fluid>
      <Masonry
        breakpointCols={breakpoints}
        className='masonry-grid align-items-stretch h-100'
        columnClassName='masonry-grid_column'
      >
        {images.map(({ src, alt }, index) => (
          <div key={index} className={!!src && 'm-1'}>
            {!!src && (
              <Link to={'/time-line'}>
                <Card>
                  <Image src={src} alt={alt} rounded />
                </Card>
              </Link>
            )}
          </div>
        ))}
      </Masonry>
    </Container>
  );
};
