import { Html, useProgress } from '@react-three/drei';

function Loader() {
  const { progress } = useProgress();
  return (
    <Html className="bg-red-300 rounded-lg p-2" center>
      {progress}% loaded
    </Html>
  );
}
export default Loader;
