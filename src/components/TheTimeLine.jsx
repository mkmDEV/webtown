import { useRef, useState } from 'react';
import { Col, Container, Row, Stack } from 'react-bootstrap';
import Slider from 'react-slick';

import { timeLineImages as images } from '@images';
import cards from '@/cards';

import { IconButton } from '@components/IconButton';
import { TimeLineItem } from '@components/TimeLineItem';

import backButton from '@icons/arrow-back.svg';
import forwardButton from '@icons/arrow-forward.svg';

export const TheTimeLine = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLastSlide, setIsLastSlide] = useState(false);

  const sliderSettings = {
    dots: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: true,
    centerPadding: '32px',
    afterChange: function (current) {
      setCurrentSlide(current);
      setIsLastSlide(current + 4 === images.length - 1);
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: '16px',
          afterChange: function (current) {
            setCurrentSlide(current);
            setIsLastSlide(current + 3 === images.length - 1);
          },
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '0',
          centerMode: true,
          afterChange: function (current) {
            setCurrentSlide(current);
            setIsLastSlide(current + 1 === images.length - 1);
          },
        },
      },
    ],
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <Container as={'main'} className={'p-0'} fluid>
      <Stack className={'pt-3 mx-5'} dir={'ltr'} gap={2} direction='horizontal'>
        <IconButton
          onClick={handlePrev}
          imgSrc={backButton}
          disabled={currentSlide === 0}
        />
        <IconButton
          onClick={handleNext}
          imgSrc={forwardButton}
          disabled={isLastSlide}
        />
      </Stack>
      <Row className={'pt-5'}>
        <Col className={'slider-container'}>
          <Slider ref={sliderRef} {...sliderSettings}>
            {cards.map((card, index) => (
              <TimeLineItem
                key={index}
                card={{ ...card, image: images.at(index).src }}
              />
            ))}
          </Slider>
        </Col>
      </Row>
    </Container>
  );
};
