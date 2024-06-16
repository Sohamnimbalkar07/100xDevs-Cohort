export const RevenueCard = ({ title, showWarning, orderCount, amount }) => {
  return (
    <div className="bg-white rounded shadow-md p-2">
      <div className="text-gray-700 text-left">{title}?</div>
      <div className="flex justify-between">
        <div>Rs. {amount}</div>
        {orderCount ? (
          <div className="flex cursor-pointer underline font-medium decoration-blue-700">
            <div className="text-blue-700">
            {orderCount} Order(s){" "}
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                className="fill-blue-700"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        ) : null}
      </div>
    </div>
  );
};
