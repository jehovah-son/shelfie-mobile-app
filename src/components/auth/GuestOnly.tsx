import { useRouter } from "expo-router";
import { userUser } from "../../../hooks/useUser";
import { useEffect } from "react";
import { Text } from "react-native";
import ThemeLoader from "../ThemeLoader";

const GuestOnly = ({ children }: { children: React.ReactNode }) => {
  const { user, authChecked } = userUser();
  const router = useRouter();

  useEffect(() => {
    if (authChecked && user) {
      router.replace("/profile");
    }
  }, [authChecked, user, router]);

  if (!authChecked || user) {
    return <ThemeLoader />;
  }

  return <>{children}</>;
};

export default GuestOnly;
