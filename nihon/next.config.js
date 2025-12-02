const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://swtzchnoafhqigpskjoh.supabase.co";
const supabaseHostname = supabaseUrl.replace(/^https?:\/\//, "").replace(/\/.*$/, "");

module.exports = {
  // ...existing config ...
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: supabaseHostname,
        pathname: "/storage/v1/object/public/**"
      }
    ]
  },
  // ...existing config ...
};