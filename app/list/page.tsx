'use client'

import { useState } from 'react'

export default function List() {
	let 상품 = ['Tomatoes', 'Pasta', 'Coconut']
	const [수량, 수량변경] = useState([0, 10, 0])
	return (
		<div>
			<h4 className="title">상품목록</h4>

			<h4>
				{상품.map((e, i) => {
					return (
						<div className="food" key={i}>
							<img src={`/food${i}.png`} alt="토마토" className="food-img" />
							<h4>{e}</h4>
							<span>{수량[i]}</span>
							<button
								onClick={() => {
									let copy = [...수량]
									copy[i]++
									수량변경(copy)
								}}
							>
								+
							</button>
							<button
								onClick={() => {
									let copy = [...수량]
									copy[i]--
									수량변경(copy)
								}}
							>
								-
							</button>
						</div>
					)
				})}
			</h4>
		</div>
	)
}
