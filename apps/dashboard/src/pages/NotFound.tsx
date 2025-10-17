import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800 dark:bg-neutral-900 dark:text-neutral-100">
      <h1 className="text-7xl font-bold mb-4 text-primary-600 dark:text-primary-400">
        404
      </h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="mb-6 text-gray-500 dark:text-gray-400">
        Sorry, the page you are looking for does not exist.
      </p>
      <Button
        color="primary"
        onClick={() => navigate(-1)}
        text="Go Back"
        className="!bg-primary-600 !text-white !hover:bg-primary-700 dark:!bg-primary-400 dark:!hover:bg-primary-500"
      />
    </div>
  );
};

export default NotFound;
