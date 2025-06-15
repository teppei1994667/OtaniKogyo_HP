type DrowerMenuButtonProps = {
  handleMenuButtonOnClick: () => void;
};

export const DrowerMenuButton = (props: DrowerMenuButtonProps) => {
  const { handleMenuButtonOnClick } = props;

  const IconButtonStyle: React.CSSProperties = {
    position: "relative",
    zIndex: 100,
    width: "48px",
    height: "48px",
    border: "none",
    background: "transparent",
    cursor: "pointer",
  };

  const LineStyle: React.CSSProperties = {
    position: "absolute",
    left: "11px",
    width: "26px",
    height: "2px",
    backgroundColor: "#333", // 修正: background-color を backgroundColor に変更
    transition: "all 0.4s",
  };

  const LineStyleFirst: React.CSSProperties = {
    ...LineStyle,
    top: "14px",
  };

  const LineStyleSecond: React.CSSProperties = {
    ...LineStyle,
    top: "23px",
  };

  const LineStyleThird: React.CSSProperties = {
    ...LineStyle,
    top: "32px",
  };
  return (
    <button style={IconButtonStyle} onClick={handleMenuButtonOnClick}>
      <span style={LineStyleFirst}></span>
      <span style={LineStyleSecond}></span>
      <span style={LineStyleThird}></span>
    </button>
  );
};
