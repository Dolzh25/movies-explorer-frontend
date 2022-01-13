import './Infographics.css';

const Infographics = () => {
  return (
    <div className="infographics">
      <div className="infographics__column infographics__column_backend">
        <p className="infographics__duration infographics__duration_color_green">1 неделя</p>
        <span className="infographics__technologie">Back-end</span>
      </div>
      <div className="infographics__column">
        <p className="infographics__duration">4 недели</p>
        <span className="infographics__technologie">Front-end</span>
      </div>
    </div>
  );
};

export default Infographics;