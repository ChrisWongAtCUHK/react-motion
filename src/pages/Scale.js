import * as motion from "motion/react-client";

const box = {
  width: 100,
  height: 100,
  backgroundColor: "#ff0088",
  borderRadius: 5,
};

function App() {
  return (
    <motion.div
      style={box}
      animate={{
        scale: 2,
        transition: { duration: 2 },
      }}
    />
  );
}

export default App;
