type DropIndicatorProps = {
  beforeId: string | null;
  column: string;
};

const DropIndicator = ({ beforeId, column }: DropIndicatorProps) => {
  return (
    <div
      data-before={beforeId || "-1"}
      data-column={column}
      style={{
        margin: '0.125rem 0',
        height: '0.125rem',
        width: '100%',
        background: 'linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(173, 219, 255, 0.5) 50%, rgba(0,0,0,0) 100%)',
        opacity: 0,
      }}
    />
  );
};

export default DropIndicator;
