import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="bg-green-600 p-8 min-h-screen flex justify-center items-center">
      <Outlet />
    </div>
  );
}
