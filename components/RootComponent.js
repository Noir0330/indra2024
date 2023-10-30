import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Login from "@/app/login/page";

export default function RootComponent({ children }) {
  const { status } = useSession();
  const router = useRouter();
  console.log(status);

  return <>{status === "unauthenticated" ? <Login /> : children}</>;
}
