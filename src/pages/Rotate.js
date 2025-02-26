import * as motion from "motion/react-client";

const box = {
  width: 100,
  height: 100,
  backgroundColor: "#ff0088",
  borderRadius: 5,
}

function App() {
  return (
    <motion.div
      style={box}
      animate={{ rotate: 360 }}
      transition={{ duration: 1 }}
    />
  );
}

export default App;
