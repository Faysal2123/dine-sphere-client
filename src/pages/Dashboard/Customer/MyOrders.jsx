import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const [isPaid, setIsPaid] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://dine-sphere-server.vercel.app/orders?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setOrders(data);

          const paidOrders = data.some((order) => order.status === "paid");
          setIsPaid(paidOrders);

       
          if (paidOrders) {
            setTotalPrice(0);
          } else {
          
            const total = data.reduce(
              (sum, order) => sum + (Number(order.price) || 0),
              0
            );
            setTotalPrice(total);
          }
        })
        .catch((error) => console.error("Error fetching orders:", error));
    }
  }, [user?.email]);

  const handleDelete = (id, mealName) => {
    Swal.fire({
      title: "Are you sure?",
      text: `${mealName} will be deleted permanently!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://dine-sphere-server.vercel.app/orders/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              toast.success(`${mealName} deleted successfully`);
              setOrders(orders.filter((order) => order._id !== id));

              
              const updatedTotal = orders
                .filter((order) => order._id !== id)
                .reduce((sum, order) => sum + (Number(order.price) || 0), 0);
              setTotalPrice(updatedTotal);

              Swal.fire("Deleted!", "Your order has been deleted.", "success");
            }
          })
          .catch((error) => toast.error("Failed to delete order"));
      }
    });
  };

  return (
    <div className="container mx-auto px-4 sm:px-8 py-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-yellow-600 mb-8">
        My Orders
      </h2>
      <div className="flex justify-between items-center mb-4">
        <p className="text-2xl font-semibold">
          Total Price:{" "}
          <span className="text-green-600">${totalPrice.toFixed(2)}</span>
        </p>
        {orders.length ? (
          <Link
            to="/dashboard/payment"
            className={`text-white font-medium rounded-lg text-base px-6 py-2.5 text-center me-2 mb-2 ${
              isPaid
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-teal-400 to-teal-600 hover:bg-teal-700"
            }`}
            disabled={isPaid}
          >
            {isPaid ? "Paid" : "Pay"}
          </Link>
        ) : (
          <button className="btn" disabled>
            Pay
          </button>
        )}
      </div>
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full leading-normal">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-3 px-5 text-left text-sm font-semibold text-gray-700">
                Image
              </th>
              <th className="py-3 px-5 text-left text-sm font-semibold text-gray-700">
                Name
              </th>
              <th className="py-3 px-5 text-left text-sm font-semibold text-gray-700">
                Price
              </th>
              <th className="py-3 px-5 text-left text-sm font-semibold text-gray-700">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((order) => (
                <tr
                  key={order._id}
                  className="border-t border-gray-200 hover:bg-gray-100"
                >
                  <td className="py-4 px-5 text-sm">
                    <img
                      src={order.strMealThumb}
                      alt={order.strMeal}
                      className="rounded-full w-12 h-12 object-cover"
                    />
                  </td>
                  <td className="py-4 px-5 text-sm text-gray-900 font-medium">
                    {order.strMeal}
                  </td>
                  <td className="py-4 px-5 text-sm text-gray-600">
                    ${order.price}
                  </td>
                  <td className="py-4 px-5 text-sm">
                    <button
                      onClick={() => handleDelete(order._id, order.strMeal)}
                      className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-700 transition duration-200"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="4"
                  className="py-4 px-5 text-center text-sm text-gray-500"
                >
                  No orders found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
