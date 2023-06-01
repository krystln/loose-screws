import Popular from "@components/Popular";

const Home = () => {
	return (
		<>
			<div className="head_text">We don&apos;t <span className="orange_gradient">Screw</span> with you</div>
			<div className="desc text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, deserunt, cumque sed modi tempore sint incidunt libero qui possimus autem quam quas accusantium eius deleniti magnam at perferendis iure quia.</div>

			<div className="flex flex-wrap gap-x-4 gap-y-4">
				<Popular prodName='Hammer' img='/images/img (1).jpg'></Popular>
				<Popular prodName='Hammer' img='/images/img (2).jpg'></Popular>
				<Popular prodName='Hammer' img='/images/img (3).jpg'></Popular>
				<Popular prodName='Hammer' img='/images/img (4).jpg'></Popular>
				<Popular prodName='Hammer' img='/images/img (5).jpg'></Popular>
			</div>
		
		</>
	)
}

export default Home;