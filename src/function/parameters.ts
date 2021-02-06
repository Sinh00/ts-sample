export const isUserSingleIn = (userId: string, userName?: string): boolean => {
  if (userId === "ABC") {
    console.log("Function parameters sample 1: ", userName);
    return true;
  } else {
    console.log("Function parameters sample 2: nothing");
    return false;
  }
};

export const isUserSingleIn2 = (
  userId: string,
  userName = "NO NAME"
): boolean => {
  if (userId === "ABC") {
    console.log("Function parameters sample 3: ", userName);
    return true;
  } else {
    console.log("Function parameters sample 4: nothing");
    return false;
  }
};

export const restParam = (...productsPrice: number[]): number => {
  console.log(productsPrice);
  return productsPrice.reduce(
    (prevTotal: number, productPrice: number): number => {
      return prevTotal + productPrice;
    },
    0
  );
};

export const restParam2 = (productsPrice: number[]): number => {
  return productsPrice.reduce(
    (prevTotal: number, productPrice: number): number => {
      return prevTotal + productPrice;
    },
    0
  );
};
