import moment from "moment";

export default function Order({ order }) {
  return (
    <div className="relative border rounded-md">
      <div className="flex items-center space-x-5 p-10 bg-gray-200 text-sm text-gray-600">
        <div>
          <p className="font-semibold">Order Placed</p>
          <p>{moment.unix(order.timestamp).format("DD MM YYYY")}</p>
        </div>
        <div>
          <p className="text-xs font-bold">Total</p>
          <p>
            {order.amount}-Next Day Delivery {order.amountShipping}
          </p>
        </div>
        <p className="text-sm whitespace-nowrap sm:text-xl self-end flex-1 text-right text-blue-500">
          {order.items.length} Items
        </p>
        <p className="absolute top-2 right-2 w-40 lg:w-72 truncate text-xs whitespace-nowrap">
          ORDER #{order.id}
        </p>
      </div>
      <div className="p-5 sm:p-10">
        <div className="flex space-x-6 overflow-x-auto">
          {order.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt=""
              className="object-contain h-20 sm:h-32"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
