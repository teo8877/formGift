

import './App.css';
import React, { useState } from 'react';

function App() {

	const [showGift, setShowGift] = useState(false);

	const handleShowGift = () => {
		setShowGift(true);
	};

	const handleScanQR = () => {
		window.open('momo://', '_blank');
		setTimeout(() => {
			window.open('https://momo.vn', '_blank');
		}, 1500);
	};

	return (
		<div className="App gradient-bg">
			<div className="card">
				<div className="decor">
					<span role="img" aria-label="flower" className="flower">🌸</span>
					<span role="img" aria-label="heart" className="heart">💖</span>
					<span role="img" aria-label="unicorn">🦄</span>
					<span role="img" aria-label="star">✨</span>
				</div>
				<h1 className="title">20/10 cực xinh cực cute!</h1>
				<p className="wish">
					🧋 Tặng em ly trà sữa siêu ngọt ngào!<br />
					Chúc em luôn xinh đẹp, rực rỡ, may mắn và thành công nhé!<br />
					<span style={{color:'#e75480'}}>You are the cutest star! ✨</span>
				</p>
				{!showGift && (
					<button className="gift-btn" onClick={handleShowGift}>
						<span role="img" aria-label="gift">🎁</span> Nhận quà siêu xinh
					</button>
				)}
								{showGift && (
									<div className="gift-appear">
										<p className="gift-text">Quét mã để nhận quà siêu cute nè 🦄✨</p>
										<img src="/img/qrscan.png" alt="Gift" className="gift-img" />
										<button className="scan-qr-btn" onClick={handleScanQR}>
											<span role="img" aria-label="bear">🐻</span> Quét ~~~~~~~~~~~~~~~~~~ 
										</button>
										<p className="gift-text">Nhớ cảm ơn anh ó <span role="img" aria-label="heart">💖</span></p>
									</div>
								)}
			</div>
		</div>
	);
}

export default App;
