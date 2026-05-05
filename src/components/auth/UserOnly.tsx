import { useRouter } from "expo-router";
import { userUser } from "../../../hooks/useUser";
import { useEffect } from "react";
import ThemeLoader from "../ThemeLoader";

const UserOnly = ({ children }: { children: React.ReactNode }) => {
  const { user, authChecked } = userUser();
  const router = useRouter();

  useEffect(() => {
    if (authChecked && !user) {
      router.push("/login");
    }
  }, [authChecked, user, router]);

  if (!authChecked || !user) {
    return <ThemeLoader />;
  }

  return <>{children}</>;
};

export default UserOnly;
