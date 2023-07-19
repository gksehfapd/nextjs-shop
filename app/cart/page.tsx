export default function Cart() {
	let 장바구니 = ['Tomatoes', 'Pasta', 'Coconut']
	return (
		<div>
			<h4 className="title">Cart</h4>

			{장바구니.map((e, i) => {
				return <CartItem 상품명={장바구니[i]} />
			})}

			<Banner content="롯데카드" />
			<Banner content="현대카드" />

			<BtnColor />
			<BtnColor btnColor="blue" />
		</div>
	)
}

function BtnColor(props: { btnColor?: string }) {
	return <button style={{ background: `${props.btnColor ? props.btnColor : 'red'}` }}>213</button>
}

function Banner(props: { content: string }) {
	return <h5>{props.content} 결제 행사중</h5>
}

function CartItem(props: { 상품명: string }) {
	return (
		<div className="cart-item">
			<p>{props.상품명}</p>
			<p>$40</p>
			<p>1개</p>
		</div>
	)
}
