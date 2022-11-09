import { Link } from 'react-router-dom';

export default function Secret() {
  return (
    <>
      <h1>You found a secret!</h1>
      <Link to="/" className="text-base text-gray-400">
        Go back
      </Link>
    </>
  );
}
