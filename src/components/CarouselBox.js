import { calculateNewValue } from '@testing-library/user-event/dist/utils';
import React from 'react';
import { Carousel } from 'react-bootstrap';

function CarouselBox() {
	return (
		<Carousel>
			<Carousel.Item>
				<img src="/img/kettle.jpg" height={'100%'} width={'100%'} />
			</Carousel.Item>
			<Carousel.Item>
				<img src="/img/gril.jpg" height={'100%'} width={'100%'} />
			</Carousel.Item>
			<Carousel.Item>
				<img src="/img/coffemachine.jpg" height={'100%'} width={'100%'} />
			</Carousel.Item>
			<Carousel.Item>
				<img src="/img/toster.jpg" height={'100%'} width={'100%'} />
			</Carousel.Item>
		</Carousel>
	);
}

export default CarouselBox;
