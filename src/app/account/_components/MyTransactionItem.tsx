"use client";

import { FC, useMemo } from "react";
import { Transaction } from "@/types/transaction";

type Props = {
  transaction: Transaction;
};

const MyTransactionItem: FC<Props> = (props) => {
  const transactionTitle = useMemo(() => {
    let title = "";
    props.transaction.items.forEach((item, idx) => {
      title += `${item.productTitle} (${item.count})`;
      if (idx !== props.transaction.items.length - 1) title += ", ";
    });
    return title;
  }, [props.transaction.items]);

  const transactionDate = useMemo(() => {
    const date = new Date(props.transaction.createdAt);
    return date.toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  }, [props.transaction.createdAt]);

  return (
    <li className={`flex p-4 border-2 border-secondary rounded shadow`}>
      <div className={`flex-1 flex flex-col gap-2 md:text-xl`}>
        <h1>{transactionTitle}</h1>
        <h2 className={`font-sans font-light italic`}>{transactionDate}</h2>
      </div>
      <div className={`flex justify-center items-center`}>
        <span className={`text-xl md:text-2xl font-bold md:pr-4`}>
          ${props.transaction.totalPrice}
        </span>
      </div>
    </li>
  );
};

export default MyTransactionItem;
