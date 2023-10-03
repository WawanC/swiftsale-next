"use client";

import { useGetTransactionsQuery } from "@/hooks/Transaction";
import MyTransactionItem from "@/app/(navigation)/account/_components/MyTransactionItem";
import LoadingIndicator from "@/app/_components/LoadingIndicator";

const MyTransactionList = () => {
  const getTransactions = useGetTransactionsQuery();

  if (getTransactions.isFetching)
    return (
      <div className={`flex justify-center py-8`}>
        <LoadingIndicator size={50} />
      </div>
    );

  return (
    <ul className={`py-4 flex flex-col gap-4`}>
      {getTransactions.data &&
        getTransactions.data.map((transaction) => (
          <MyTransactionItem key={transaction.id} transaction={transaction} />
        ))}
    </ul>
  );
};

export default MyTransactionList;
