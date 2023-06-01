export const Banner = ({ title, subTitle }) => {
  return (
    <div className="jumbotron">
      <div className="title">{title}</div>
      <div className="sub-title">{subTitle}</div>
    </div>
  );
};
