import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const navigate = useNavigate();
  const { isPending: isLoading, mutate: login } = useMutation({
    mutationFn: loginApi,
    onSuccess: () => {
      navigate("/dashboard", { replace: true });
    },
    onError: () => toast.error("Provided email or password are incorrect"),
  });
  return { isLoading, login };
}
