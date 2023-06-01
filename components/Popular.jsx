import Image from "next/image";

const Popular = ({ prodName, img }) => {
	return (
		<>
			<div className="bg-blur-lg border border-gray-300 rounded-md w-fit h-fit p-5">
				<Image
					className="rounded-md"
					src={img}
					alt={prodName}
					width={200}
					height={200}
				/>
				<p className="desc">{prodName}</p>
				<div className="flex flex-between">

					<button className="outline_btn"><span>Add to cart</span><span></span></button>
					<button className="black_btn">Buy</button>
				</div>
			</div>
		</>
	)
}

export default Popular;