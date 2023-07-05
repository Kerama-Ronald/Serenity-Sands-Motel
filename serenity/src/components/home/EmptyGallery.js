function EmptyGallery() {
	return (
		<section className='empty-gallery'>
			<div className='box-ctn'>
				<i className='fas fa-umbrella-beach'></i>
				<h2>"We couldn't find any hotels for this combination of filters."</h2>
			</div>
		</section>
	);
}

export default EmptyGallery;