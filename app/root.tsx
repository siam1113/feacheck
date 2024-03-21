import {
  Links,
  Meta,
  Outlet,
  Scripts,
} from "@remix-run/react";
import "./tailwind.css";

export default function App() {
  return (
    <html>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <main className="block p-3">
          <div>
            <Outlet />
            <Scripts />
          </div>
        </main>
      </body>
    </html>
  );
}
