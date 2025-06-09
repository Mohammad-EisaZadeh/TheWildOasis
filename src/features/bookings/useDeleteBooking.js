import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleteBookingFn } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useDeleteBooking() {
  const queryClient = useQueryClient();
  const { isLoading: isDeleting, mutate: deleteBooking } = useMutation({
    mutationFn: deleteBookingFn,
    onSuccess: () => {
      toast.success("booking Succesfully Deleted");
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isDeleting, deleteBooking };
}
