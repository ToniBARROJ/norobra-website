import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css/pagination';
import 'swiper/css';
import './Builds.css'
import image1 from '../../../assets/images/BuildImages/build-1.jpg'
import image2 from '../../../assets/images/BuildImages/build-2.jpg'
import image3 from '../../../assets/images/BuildImages/build-3.jpg'
import image4 from '../../../assets/images/BuildImages/build-4.jpg'
import image6 from '../../../assets/images/BuildImages/build-6.jpg'

const slidesData = [
    { 
		imgSrc: `${image6}`, 
		title: "Casa en la sierra con diseño moderno",
		description: "Proyecto llave en mano de una casa moderna en entorno rural, con estructura eficiente y acabados de alta calidad.",
		tags: ["Montaña", "Eficiencia", "Calidad"]
	},
	{ 
		imgSrc: `${image2}`, 
		title: "Reforma integral en entorno urbano",
		description: "Transformación completa de una vivienda urbana manteniendo la estructura original pero modernizando todos los espacios.",
		tags: ["Reforma", "Diseño", "Ciudad"]
	},
	{ 
		imgSrc: `${image1}`, 
		title: "Residencia Vanguardista en Hormigón y Cristal",
  		description: "Una vivienda de diseño contemporáneo que combina hormigón expuesto, grandes ventanales y vegetación integrada para un estilo moderno y natural.",
  		tags: ["Moderna", "Hormigón", "Minimalismo"]
	},
	{ 
		imgSrc: `${image4}`, 
		title: "Chalet contemporáneo con jardín",
		description: "Diseño y construcción de un chalet con líneas modernas, grandes ventanales y jardín privado.",
		tags: ["Chalet", "Moderno", "Obra"]
	},
	{ 
		imgSrc: `${image3}`, 
		title: "Vivienda modular de ejecución rápida",
		description: "Construcción modular con materiales sostenibles, optimizada para eficiencia térmica y rápida ejecución.",
		tags: ["Modular", "Sostenible", "Rápida"]
	}
]

export const Builds = () => {
	const swiperWrapperRef = useRef(null);

	function adjustMargin() {
		const screenWidth = window.innerWidth;

		if (swiperWrapperRef.current) {
			swiperWrapperRef.current.style.marginLeft = 
			screenWidth <= 520
			? "0px"
			: screenWidth <= 650
			? "-50px"
			: screenWidth <= 800
			? "-100px"
			: "-150px";
		}
	}

	useEffect(() => {
		adjustMargin();
		window.addEventListener("resize", adjustMargin);
		return () => window.removeEventListener("resize", adjustMargin);
	}, []);

    return (
		<>
			<section className="slider-container">
				
				<div className="slider">
					<Swiper	
					modules={[Pagination]}
					grabCursor
					initialSlide={2}
					centeredSlides
					slidesPerView="auto"
					speed={800}
					slideToClickedSlide
					pagination={{clickable: true}}
					breakpoints={{
						320: { spaceBetween: 40 },
						650: { spaceBetween: 30 },
						1000: { spaceBetween: 20 },
					}}
					onSwiper={(swiper) => {
						swiperWrapperRef.current = swiper.wrapperEl;
					}}>
						{slidesData.map((slide, index) => (
							<SwiperSlide key={index}>
								<img src={slide.imgSrc} alt={slide.title} />
								<div className="title">
									<h2>{slide.title}</h2>
								</div>
								<div className="content">
									<div className="text-box">
										<p>{slide.description}</p>
									</div>
									<div className="tags-footer">
										<div className="tags">
											{slide.tags.map((tag, idx) => (
												<span key={idx} style={{"--i": idx + 1}}>
													{tag}
												</span>
											))}
										</div>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
        	</section>
		</>
    )
}