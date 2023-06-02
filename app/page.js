import Image from "next/image";

const Home = () => {
	return (
		<>
			<div className="flex rounded-[7rem] bg-[url('/images/hero.png')] w-full h-[400px] bg-no-repeat mb-5 bg-contain">
				<div className="text-right w-full py-20 pr-10">
					<div className="head_text">For all your<br/> <span className="hover:class:orange_gradient">hardware</span> needs</div>
					<button className="font-inter border border-black text-center rounded-3xl py-1.5 px-5 bg-black hover:bg-white text-white hover:text-black transition-all mt-10 justify-center align-middle">Shop</button>
				</div>
			</div>

			<div className="flex rounded-[7rem] bg-[url('/images/hire.png')] bg-right w-full h-[400px] bg-no-repeat bg-contain">
				<div className="text-left w-full py-20 pr-10">
					<div className="head_text">Can't be<br/> <span className="hover:class:orange_gradient">bothered</span> ?</div>
					<button className="font-inter border border-black text-center rounded-3xl py-1.5 px-5 bg-black hover:bg-white text-white hover:text-black transition-all mt-10 justify-center align-middle">Hire us</button>
				</div>
			</div>
		</>
	)
}

export default Home;