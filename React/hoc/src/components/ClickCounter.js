import withCounter from "./HOC/withCounter";

const ClickCounter = (props) => {
  const { count, incrementCount } = props;
  return (
    <div>
      <button type="button" onClick={incrementCount}>
        Clicked {count} items
      </button>
    </div>
  );
};

export default withCounter(ClickCounter);
