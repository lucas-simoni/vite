import { useNotifications } from 'hooks/queries/notifications';
import { Link } from 'react-router-dom';

export default function Secret() {
  const { isLoading, error, data } = useNotifications();
  console.log(isLoading);
  console.log(error);
  console.log(data);

  return (
    <>
      <h1>You found a secret!</h1>
      <Link to="/" className="text-base text-gray-400">
        Go back
      </Link>
      <br />
      {isLoading ? (
        <div>Loading notifications...</div>
      ) : data ? (
        <div>
          <p>First Notification: {data[0].id}</p>
        </div>
      ) : (
        error && <div>An error ocurred</div>
      )}
    </>
  );
}
