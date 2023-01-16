import { useState } from "react";
import Star from "./assets/icon-star.svg";
import ProfileColton from "./assets/image-colton.jpg";
import ProfileAnne from "./assets/image-anne.jpg";
import ProfileIrene from "./assets/image-irene.jpg";
import TopPattern from "./assets/bg-pattern-top-desktop.svg";
import BottomPattern from "./assets/bg-pattern-bottom-desktop.svg";
import TopPatternMobile from "./assets/bg-pattern-top-mobile.svg";
import BottomPatternMobile from "./assets/bg-pattern-bottom-mobile.svg";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="relative min-h-screen max-h-fit text-center px-4 p-20 font-League  flex flex-col justify-center items-start  ">
			<div className="lg:grid lg:grid-cols-[1.3fr,2fr] max-w-sm lg:max-w-5xl gap-15 mb-10 items-center mx-auto">
				<div className="">
					<h1 className="font-bold text-VeryDarkMagenta px-10 lg:px-5 text-4xl lg:text-5xl lg:text-left lg:pr-12">
						10,000+ of our users love our products.
					</h1>
					<p className="text-DarkGrayish p-6 mb-4  lg:text-left">
						We only provide great products combined with excellent customer service. See what our
						satisfied customers are saying about our services.
					</p>
				</div>

				<div className="lg:w-[70%] ml-auto">
					<div className="bg-LightGrayish lg:flex-row lg:justify-center lg:gap-5 flex flex-col items-center rounded-lg p-2 lg:-translate-x-20">
						<div className="flex pb-2">
							<img src={Star} alt="Star" />
							<img src={Star} alt="Star" />
							<img src={Star} alt="Star" />
							<img src={Star} alt="Star" />
							<img src={Star} alt="Star" />
						</div>
						<p className="font-bold text-VeryDarkMagenta">Rated 5 Stars in Reviews</p>
					</div>
					<div className="bg-LightGrayish lg:flex-row lg:justify-center lg:gap-5 flex flex-col items-center rounded-lg p-2 my-4 lg:-translate-x-10 lg:my-6">
						<div className="flex pb-2">
							<img src={Star} alt="Star" />
							<img src={Star} alt="Star" />
							<img src={Star} alt="Star" />
							<img src={Star} alt="Star" />
							<img src={Star} alt="Star" />
						</div>
						<p className="font-bold text-VeryDarkMagenta">Rated 5 Stars in Report Guru</p>
					</div>
					<div className="bg-LightGrayish lg:flex-row lg:justify-center lg:gap-5 flex flex-col items-center rounded-lg p-2">
						<div className="flex pb-2">
							<img src={Star} alt="Star" />
							<img src={Star} alt="Star" />
							<img src={Star} alt="Star" />
							<img src={Star} alt="Star" />
							<img src={Star} alt="Star" />
						</div>
						<p className="font-bold text-VeryDarkMagenta">Rated 5 Stars in BestTech</p>
					</div>
				</div>
			</div>

			<div className="lg:flex gap-4 max-w-sm lg:max-w-5xl mx-auto">
				<div className="bg-VeryDarkMagenta p-8 my-4 rounded-lg ">
					<div className="flex items-center gap-4 ">
						<img className="rounded-full w-12" src={ProfileColton} alt="" />
						<div>
							<h1 className="font-bold text-white text-left"> Colton Smith </h1>
							<p className="font-bold text-SoftPink text-left"> Verified Buyer</p>
						</div>
					</div>
					<p className="pt-4 pr-6 text-white text-left ">
						"We needed the same printed design as the one we had ordered a week prior. Not only did
						they find the original order, but we also received it in time. Excellent!"
					</p>
				</div>

				<div className="bg-VeryDarkMagenta p-8 my-4 rounded-lg lg:translate-y-10">
					<div className="flex items-center gap-4 ">
						<img className="rounded-full w-12" src={ProfileIrene} alt="" />
						<div>
							<h1 className="font-bold text-white text-left"> Irene Roberts </h1>
							<p className="font-bold text-SoftPink text-left"> Verified Buyer</p>
						</div>
					</div>
					<p className="pt-4 pr-6 text-white text-left ">
						"Customer service is always excellent and very quick turn around. Completely delighted
						with the simplicity of the purchase and the speed of delivery."
					</p>
				</div>

				<div className="bg-VeryDarkMagenta p-8 my-4 rounded-lg lg:translate-y-16">
					<div className="flex items-center gap-4 ">
						<img className="rounded-full w-12" src={ProfileAnne} alt="" />
						<div>
							<h1 className="font-bold text-white text-left">Anne Wallace </h1>
							<p className="font-bold text-SoftPink text-left"> Verified Buyer</p>
						</div>
					</div>
					<p className="pt-4 pr-6 text-white text-left ">
						"Put an order with this company and can only praise them for the very high standard.
						Will definitely use them again and recommend them to everyone!"
					</p>
				</div>
			</div>

			{/* Background patterns */}
			<picture>
				<source srcSet={TopPattern} media="(min-width: 1000px)" />
				<img
					className="absolute top-0 left-0 w-full lg:w-[40%] max-w-xl lg:max-w-none"
					src={TopPatternMobile}
					alt=""
				/>
			</picture>
			<picture>
				<source media="(min-width: 1000px)" srcSet={BottomPattern} />
				<img
					className="absolute bottom-0 left-0 w-full lg:h-[80%]  max-w-sm lg:max-w-none "
					src={BottomPatternMobile}
					alt=""
				/>
			</picture>
		</div>
	);
}

export default App;
