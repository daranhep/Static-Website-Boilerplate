(() => {
  const IAmES6 = `I must be transpiled by Babel`;
  console.log(IAmES6);
})();

import "./_scss/main.scss";

if (process.env.NODE_ENV !== "development") {
  console.log("Looks like we are in development mode!");
}
