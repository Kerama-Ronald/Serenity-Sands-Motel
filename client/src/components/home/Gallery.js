import React from 'react';
import HotelCard from '.HotelCard';

function Gallery(props) {
	return (
		<section className='gallery'>
			<Gallery hotels={[
                    { slug: 'hilton', name: 'Hillton', photo: './images/argentina-buenos-aires-province-san-antonio-de-areco-group-of-gauchos-E2D343.jpg', description: 'This hotel is expensive', rooms: '100', city: 'Nairobi', country: 'Kenya', price: '100000' },
                ]} />
			{props.hotels.map((hotel) => (
				<HotelCard key={hotel.slug} {...hotel} />
			))}
		</section>
	);
}

export default Gallery;