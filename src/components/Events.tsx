import { FC, useEffect, useState } from 'react';
import { Event } from '../types/declarations';

const EventList: FC = () => {
	const [events, setEvents] = useState<Event[]>([]);

	return (<div className='container p-6 mx-auto bg-gray-50'>
		<h2 className='text-3xl font-bold text-center'>Upcoming Events</h2>
		<div
			className={`pt-8 grid max-w-5xl gap-8 mx-auto grid-cols-1 md:${events.length === 2 ? 'grid-cols-2' : 'lg:grid-cols-3'
				}`}
		>
			{events.map((event: Event) => (
				<div
					key={event.id}
					className='overflow-hidden transition-shadow duration-300 bg-white border border-gray-200 shadow-lg rounded-xl hover:shadow-2xl hover:cursor-pointer'
				>
					<div className='p-6'>
						<h3 className='mb-2 text-2xl font-semibold text-gray-800'>{event.name}</h3>
						<p className='mb-4 text-sm text-gray-500'>{new Date(event.date).toLocaleDateString()}</p>
						<p className='mb-1 text-lg font-medium text-gray-700'>{event.location}</p>
						<p className='mb-4 text-sm text-gray-600'>{event.description}</p>
						<span className='inline-block px-3 py-1 text-xs font-semibold text-blue-800 bg-blue-100 rounded-full'>
							{event.type}
						</span>
					</div>
				</div>
			))}
		</div>
	</div>
	);
};

export default EventList;
