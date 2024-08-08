import { Spinner } from "./Spinner";

export function PageLoader() {
  return (
    <div className="bg-gray-0 fixed top-0 left-0 h-full w-full grid place-items-center">
      <Spinner />
    </div>
  )
}

