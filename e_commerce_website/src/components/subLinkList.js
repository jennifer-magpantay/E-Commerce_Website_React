import React from "react";

// variable to hold an array of links/items
export const subLinkList = [
    "Today's Deals",
    "Last Days of Sales",
    "Best Sellers",
    "Books",
    "Kindle",
    "Prime Video",
    "Gift Ideas",
    "Customer Service",
  ];

  export const list = (
    <ul>
      {subLinkList.map((category, i) => (
        <li key={i}>{category}</li>
      ))}
    </ul>
  );