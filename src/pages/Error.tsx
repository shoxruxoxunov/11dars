import { useRouteError, Link, isRouteErrorResponse } from "react-router-dom";

function Error() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    if (error.status == 404) {
      return (
        <main className="grid min-h-[100vh] place-items-center px-8">
          <div className="text-center">
            <h1 className="text-9xl font-semibold text-primary">404</h1>
            <p className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl mb-8 uppercase">
              page not found
            </p>
            <div>
              <Link className="btn btn-secondary" to="/">
                Go back home
              </Link>
            </div>
          </div>
        </main>
      );
    }
  }
  return (
    <main className="grid min-h-[100vh] place-items-center px-8">
      <h3>there was an error</h3>
    </main>
  );
}

export default Error;
