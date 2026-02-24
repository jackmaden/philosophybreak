export default async (request, context) => {
  // Get the response for the next item in the chain
  const response = await context.next();
  
  // Detect country (default to US if not found)
  const countryCode = context.geo?.country?.code || "US";

  // Use context.cookies to set the cookie on the response
  context.cookies.set({
    name: "nf_country",
    value: countryCode,
    path: "/",
    httpOnly: false, // Allows your React code to read it
    secure: true,
    sameSite: "Lax",
  });

  return response;
};