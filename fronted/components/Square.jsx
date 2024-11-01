import "../src/App.css";

const Square = ({ num, handleClick, square }) => {
	return (
		<div onClick={() => handleClick(num)} className='Grid-item'>
			{square[num]}
		</div>
	);
};

export default Square;
