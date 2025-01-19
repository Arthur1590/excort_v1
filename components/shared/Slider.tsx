import React from 'react'
import './slider.css'

const Slider = () => {
	const icons = ['🔥', '🚀', '⚡', '🌟', '💡', '🎯', '🛠️', '📈']

	return (
		<div className='conveyor-container'>
			<div className='conveyor'>
				{/* Дублируем массив для плавного эффекта */}
				{[...icons, ...icons].map((icon, index) => (
					<div key={index} className='icon'>
						{icon}
					</div>
				))}
			</div>
		</div>
	)
}

export default Slider
