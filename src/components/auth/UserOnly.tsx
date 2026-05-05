import { useRouter } from "expo-router";
import { userUser } from "../../../hooks/useUser";
import { useEffect } from "react";
import { Text } from "react-native";

const UserOnly = ({ children }: { children: React.ReactNode }) => {
  const { user, authChecked } = userUser();
  const router = useRouter();

  useEffect(() => {
    if (authChecked && !user) {
      router.push("/login");
    }
  }, [authChecked, user, router]);

  if (!authChecked || !user) {
    return <Text>Loading...</Text>;
  }

  return <>{children}</>;
};

export default UserOnly;
